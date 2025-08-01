<template>
  <div class="space-y-4">
    <!-- Saved Forms Header -->
    <div class="flex items-center justify-between">
      <h3 class="text-sm font-semibold text-slate-700">Saved Forms</h3>
      <button
        @click="showModal = true"
        class="px-3 py-1 text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
      >
        <svg class="w-4 h-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 011-1h1a2 2 0 011 1v2M7 7h10" />
        </svg>
        View All ({{ savedForms.length }})
      </button>
    </div>

    <!-- Quick Actions -->
    <div class="space-y-2">
      <button
        @click="saveCurrentForm"
        :disabled="!currentForm || currentForm.length === 0"
        class="w-full px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-200 hover:bg-blue-100 disabled:bg-slate-100 disabled:text-slate-400 disabled:cursor-not-allowed rounded-md transition-colors"
      >
        <svg class="w-4 h-4 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        Save Current Form
      </button>
    </div>

    <!-- Recent Forms List -->
    <div v-if="recentForms.length > 0" class="space-y-2">
      <h4 class="text-xs font-medium text-slate-600 uppercase tracking-wide">Recent Forms</h4>
      <div class="space-y-1">
        <div
          v-for="form in recentForms"
          :key="form.id"
          class="p-3 bg-white border border-slate-200 rounded-md hover:border-slate-300 transition-colors cursor-pointer"
          @click="loadForm(form.id)"
        >
          <div class="flex items-center justify-between">
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-slate-900 truncate">
                Form {{ form.id.slice(-6) }}
              </p>
              <p class="text-xs text-slate-500">
                {{ form.fieldCount }} field{{ form.fieldCount !== 1 ? 's' : '' }} • 
                {{ formatDate(form.updatedAt || form.createdAt) }}
              </p>
            </div>
            <button @click.stop="deleteForm(form.id)" class="ml-2 p-1 text-slate-400 hover:text-red-500 transition-colors">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Saved Forms Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click="closeModal">
      <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-screen overflow-y-auto" @click.stop>
        <div class="p-6">
          <!-- Modal Header -->
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-xl font-semibold text-slate-900">Saved Forms</h2>
            <button @click="closeModal" class="text-slate-400 hover:text-slate-600">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Actions Bar -->
          <div class="flex items-center justify-between mb-4">
            <p class="text-sm text-slate-600">{{ savedForms.length }} saved form{{ savedForms.length !== 1 ? 's' : '' }}</p>
            <div class="flex gap-2">
              <button
                @click="saveCurrentForm"
                :disabled="!currentForm || currentForm.length === 0"
                class="px-3 py-1 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 disabled:text-slate-400 disabled:cursor-not-allowed rounded-md transition-colors"
              >
                Save Current
              </button>
              <button
                @click="clearAllForms"
                :disabled="savedForms.length === 0"
                class="px-3 py-1 text-sm text-red-600 hover:text-red-800 hover:bg-red-50 disabled:text-slate-400 disabled:cursor-not-allowed rounded-md transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>

          <!-- Forms Grid -->
          <div v-if="savedForms.length === 0" class="text-center py-12">
            <div class="text-slate-400 mb-4">
              <svg class="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p class="text-slate-500 font-medium">No saved forms yet</p>
            <p class="text-slate-400 text-sm mt-1">Create a form and save it to see it here</p>
          </div>

          <div v-else class="grid grid-cols-1 gap-4">
            <div
              v-for="form in savedForms"
              :key="form.id"
              class="p-4 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors"
            >
              <div class="flex items-start justify-between">
                <div class="flex-1 min-w-0">
                  <div class="flex items-center gap-2 mb-2">
                    <h3 class="text-sm font-medium text-slate-900">
                      Form {{ form.id.slice(-6) }}
                    </h3>
                    <span class="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full">
                      {{ form.fieldCount }} field{{ form.fieldCount !== 1 ? 's' : '' }}
                    </span>
                  </div>
                  
                  <div class="text-xs text-slate-500 space-y-1">
                    <p>Created: {{ formatDate(form.createdAt) }}</p>
                    <p v-if="form.updatedAt !== form.createdAt">Updated: {{ formatDate(form.updatedAt) }}</p>
                  </div>

                  <!-- Form Preview -->
                  <div v-if="form.data && form.data.length > 0" class="mt-3 p-3 bg-slate-50 rounded-md">
                    <p class="text-xs font-medium text-slate-600 mb-2">Fields:</p>
                    <div class="flex flex-wrap gap-1">
                      <span
                        v-for="(field, index) in form.data.slice(0, 5)"
                        :key="index"
                        class="text-xs px-2 py-1 bg-white border border-slate-200 rounded text-slate-600"
                      >
                        {{ getFieldTypeName(field.element) }}
                      </span>
                      <span v-if="form.data.length > 5" class="text-xs px-2 py-1 text-slate-400">
                        +{{ form.data.length - 5 }} more
                      </span>
                    </div>
                  </div>
                </div>

                <!-- Actions -->
                <div class="flex items-center gap-1 ml-4">
                  <button
                    @click="loadForm(form.id)"
                    class="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                    title="Load Form"
                  >
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </button>
                  <button
                    @click="deleteForm(form.id)"
                    class="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
                    title="Delete Form"
                  >
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Success/Error Messages -->
    <div v-if="message.text" class="mt-4">
      <div :class="[
        'p-3 rounded-md text-sm',
        message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
      ]">
        {{ message.text }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useFormStorage } from '../utils/formStorage.js'
import { nanoid } from 'nanoid'

const props = defineProps({
  currentForm: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['load-form', 'form-saved'])

// State
const showModal = ref(false)
const savedForms = ref([])
const message = ref({ text: '', type: 'success' })
const { listForms, store, retrieve, delete: deleteStoredForm, clear } = useFormStorage()

// Computed
const recentForms = computed(() => {
  return savedForms.value
    .sort((a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt))
    .slice(0, 3)
})

// Methods
const loadSavedForms = () => {
  savedForms.value = listForms()
}

const saveCurrentForm = () => {
  if (!props.currentForm || props.currentForm.length === 0) {
    showMessage('No form to save', 'error')
    return
  }

  const formId = nanoid()
  const success = store(formId, props.currentForm, {
    name: `Form ${formId.slice(-6)}`,
    savedAt: new Date().toISOString()
  })

  if (success) {
    showMessage('Form saved successfully!', 'success')
    loadSavedForms()
    emit('form-saved', formId)
  } else {
    showMessage('Failed to save form', 'error')
  }
}

const loadForm = (formId) => {
  const formData = retrieve(formId)
  if (formData && formData.data) {
    emit('load-form', formData.data)
    showMessage('Form loaded successfully!', 'success')
    closeModal()
  } else {
    showMessage('Failed to load form', 'error')
  }
}

const deleteForm = (formId) => {
  if (confirm('Are you sure you want to delete this form?')) {
    const success = deleteStoredForm(formId)
    if (success) {
      showMessage('Form deleted successfully!', 'success')
      loadSavedForms()
    } else {
      showMessage('Failed to delete form', 'error')
    }
  }
}

const clearAllForms = () => {
  if (confirm('Are you sure you want to delete all saved forms? This cannot be undone.')) {
    const success = clear()
    if (success) {
      showMessage('All forms deleted successfully!', 'success')
      loadSavedForms()
    } else {
      showMessage('Failed to clear forms', 'error')
    }
  }
}

const closeModal = () => {
  showModal.value = false
}

const showMessage = (text, type = 'success') => {
  message.value = { text, type }
  setTimeout(() => {
    message.value = { text: '', type: 'success' }
  }, 3000)
}

const formatDate = (dateString) => {
  try {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now - date
    const diffMins = Math.floor(diffMs / (1000 * 60))
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60))
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffMins < 1) return 'Just now'
    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays < 7) return `${diffDays}d ago`
    
    return date.toLocaleDateString()
  } catch {
    return 'Unknown'
  }
}

const getFieldTypeName = (element) => {
  const names = {
    'header': 'Header',
    'p': 'Paragraph', 
    'input': 'Input',
    'textarea': 'Textarea',
    'select': 'Select',
    'button': 'Button'
  }
  return names[element] || element
}

// Lifecycle
onMounted(() => {
  loadSavedForms()
})
</script>