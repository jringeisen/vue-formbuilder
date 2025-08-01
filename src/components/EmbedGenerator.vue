<template>
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h3 class="text-sm font-semibold text-slate-700">Generate Embed Code</h3>
      <button
        @click="openModal"
        :disabled="!formData || formData.length === 0"
        class="px-3 py-1 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed rounded-md transition-colors"
      >
        <svg class="w-4 h-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
        Embed
      </button>
    </div>

    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="closeModal">
      <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-screen overflow-y-auto" @click.stop>
        <div class="p-6">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-semibold text-slate-900">Generate Embed Code</h2>
            <button @click="closeModal" class="text-slate-400 hover:text-slate-600">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="space-y-6">
            <div class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">
                Form Submission Endpoint
                <span class="text-red-500">*</span>
              </label>
              <input
                v-model="config.endpoint"
                type="url"
                placeholder="https://your-api.com/submit"
                class="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <p class="text-xs text-slate-500">The URL where form submissions will be sent via POST request</p>
            </div>

            <div class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">Embed Type</label>
              <div class="grid grid-cols-3 gap-3">
                <button
                  v-for="type in embedTypes"
                  :key="type.value"
                  @click="config.type = type.value"
                  :class="getTypeButtonClass(type.value)"
                >
                  <div class="font-medium">{{ type.label }}</div>
                  <div class="text-xs text-slate-500 mt-1">{{ type.description }}</div>
                </button>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="block text-sm font-medium text-slate-700">Width</label>
                <select v-model="config.width" class="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="100%">100% (Responsive)</option>
                  <option value="800px">800px (Fixed)</option>
                  <option value="600px">600px (Fixed)</option>
                  <option value="400px">400px (Fixed)</option>
                </select>
              </div>
              <div class="space-y-2">
                <label class="block text-sm font-medium text-slate-700">Height</label>
                <select v-model="config.height" class="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                  <option value="auto">Auto (Responsive)</option>
                  <option value="600px">600px (Fixed)</option>
                  <option value="500px">500px (Fixed)</option>
                  <option value="400px">400px (Fixed)</option>
                </select>
              </div>
            </div>
          </div>

          <div v-if="config.endpoint" class="mt-8">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-lg font-medium text-slate-900">Generated Code</h3>
              <button
                @click="copyToClipboard"
                class="flex items-center px-3 py-1 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
              >
                <svg class="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {{ copied ? 'Copied!' : 'Copy Code' }}
              </button>
            </div>
            
            <div class="bg-slate-900 rounded-lg p-4 overflow-x-auto">
              <pre class="text-sm text-slate-100"><code>{{ embedCode }}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { nanoid } from 'nanoid'
import { useFormStorage } from '../utils/formStorage.js'

const props = defineProps({
  formData: {
    type: Array,
    default: () => []
  }
})

const showModal = ref(false)
const copied = ref(false)
const formId = ref(nanoid())
const { store, retrieve } = useFormStorage()

const config = ref({
  endpoint: '',
  type: 'iframe',
  width: '100%',
  height: 'auto'
})

const embedTypes = [
  { value: 'iframe', label: 'iFrame', description: 'Most compatible' },
  { value: 'script', label: 'JavaScript', description: 'Dynamic loading' },
  { value: 'html', label: 'Direct HTML', description: 'Copy & paste' }
]

watch(() => props.formData, () => {
  formId.value = nanoid()
}, { deep: true })

const embedCode = computed(() => {
  if (!config.value.endpoint) return ''
  
  const baseUrl = window.location.origin
  const embedUrl = baseUrl + '/embed/' + formId.value + '?endpoint=' + encodeURIComponent(config.value.endpoint)
  
  if (config.value.type === 'iframe') {
    const minHeight = config.value.height === 'auto' ? 'min-height: 400px;' : ''
    return '<iframe\n  src="' + embedUrl + '"\n  width="' + config.value.width + '"\n  height="' + config.value.height + '"\n  frameborder="0"\n  style="border: none; ' + minHeight + '"\n  title="Form">\n</iframe>'
  }
  
  return 'Embed code generation...'
})

const getTypeButtonClass = (typeValue) => {
  const baseClass = 'p-3 text-sm border rounded-lg transition-all'
  if (config.value.type === typeValue) {
    return baseClass + ' border-blue-500 bg-blue-50 text-blue-700'
  }
  return baseClass + ' border-slate-200 hover:border-slate-300'
}

const openModal = () => {
  showModal.value = true
  storeFormData()
}

const closeModal = () => {
  showModal.value = false
  copied.value = false
}

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(embedCode.value)
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}

const storeFormData = () => {
  if (props.formData.length > 0) {
    store(formId.value, props.formData, {
      endpoint: config.value.endpoint,
      type: config.value.type,
      width: config.value.width,
      height: config.value.height
    })
  }
}
</script>