<template>
  <div class="standalone-form-container" :class="themeClass">
    <!-- Loading State -->
    <div v-if="loading" class="text-center py-8">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      <p class="mt-4 text-slate-600">Loading form...</p>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="text-center py-8">
      <div class="text-red-500 mb-4">
        <svg class="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
        </svg>
      </div>
      <h3 class="text-lg font-medium text-slate-900 mb-2">Form Not Found</h3>
      <p class="text-slate-600">The requested form could not be loaded.</p>
    </div>

    <!-- Success State -->
    <div v-else-if="submitted" class="text-center py-12">
      <div class="text-green-500 mb-4">
        <svg class="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <h3 class="text-xl font-semibold text-slate-900 mb-2">Thank you!</h3>
      <p class="text-slate-600">Your form has been submitted successfully.</p>
      <button
        @click="resetForm"
        class="mt-4 px-4 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
      >
        Submit Another Response
      </button>
    </div>

    <!-- Form Content -->
    <div v-else class="max-w-2xl mx-auto">
      <div class="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
        <!-- Error Message -->
        <div v-if="submitError" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
          <div class="flex">
            <svg class="h-5 w-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
            <div class="ml-3">
              <h3 class="text-sm font-medium text-red-800">Submission Error</h3>
              <p class="mt-1 text-sm text-red-700">{{ submitError }}</p>
            </div>
          </div>
        </div>

        <form @submit.prevent="submitForm" class="space-y-6">
          <div v-for="(field, index) in formData" :key="index">
            <!-- Header Fields -->
            <div v-if="field.element === 'header'" class="mb-6">
              <h1 v-if="!field.type || field.type === 'h1'" class="text-3xl font-bold text-slate-900 mb-2" :class="field.class">{{ field.text }}</h1>
              <h2 v-if="field.type === 'h2'" class="text-2xl font-bold text-slate-800 mb-2" :class="field.class">{{ field.text }}</h2>
              <h3 v-if="field.type === 'h3'" class="text-xl font-bold text-slate-700 mb-2" :class="field.class">{{ field.text }}</h3>
              <h4 v-if="field.type === 'h4'" class="text-lg font-bold text-slate-700 mb-2" :class="field.class">{{ field.text }}</h4>
            </div>

            <!-- Paragraph Fields -->
            <div v-if="field.element === 'p'" class="mb-4">
              <p class="text-slate-600 leading-relaxed" :class="field.class">{{ field.textarea }}</p>
            </div>

            <!-- Input Fields -->
            <div v-if="field.element === 'input'" class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">
                {{ field.label }}
                <span v-if="field.required" class="text-red-500 ml-1">*</span>
              </label>
              <input
                v-model="formValues[field.name]"
                :placeholder="field.placeholder"
                :type="field.type"
                :name="field.name"
                :required="field.required"
                :autocomplete="field.autocomplete"
                class="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                :class="field.class" />
            </div>

            <!-- Textarea Fields -->
            <div v-if="field.element === 'textarea'" class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">
                {{ field.label }}
                <span v-if="field.required" class="text-red-500 ml-1">*</span>
              </label>
              <textarea
                v-model="formValues[field.name]"
                :placeholder="field.placeholder"
                :name="field.name"
                :rows="field.rows"
                :required="field.required"
                :autocomplete="field.autocomplete"
                class="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                :class="field.class"></textarea>
            </div>

            <!-- Select Fields -->
            <div v-if="field.element === 'select'" class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">
                {{ field.text }}
                <span v-if="field.required" class="text-red-500 ml-1">*</span>
              </label>
              <select
                v-model="formValues[field.name]"
                :name="field.name"
                :required="field.required"
                class="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                :class="field.class">
                <option value="">Choose an option...</option>
                <option v-for="(option, optionIndex) in field.options" :key="optionIndex" :value="option.value">
                  {{ option.label }}
                </option>
              </select>
            </div>

            <!-- Checkbox Fields -->
            <div v-if="field.element === 'checkbox'" class="space-y-2">
              <div class="flex items-center space-x-3">
                <input
                  :id="field.name"
                  v-model="formValues[field.name]"
                  :name="field.name"
                  :class="field.class"
                  :required="field.required"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label
                  :for="field.name"
                  class="text-sm text-slate-700 cursor-pointer"
                >
                  {{ field.checkboxLabel || 'Checkbox label' }}
                </label>
              </div>
            </div>

            <!-- Checkbox Group Fields -->
            <div v-if="field.element === 'checkbox-group'" class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">
                {{ field.label }}
                <span v-if="field.required" class="text-red-500 ml-1">*</span>
              </label>
              <div class="space-y-3">
                <div
                  v-for="(option, optionIndex) in field.options"
                  :key="optionIndex"
                  class="flex items-center space-x-3"
                >
                  <input
                    :id="`${field.name}_${optionIndex}`"
                    v-model="formValues[field.name]"
                    :name="field.name"
                    :value="option.value"
                    :class="field.class"
                    :required="field.required && optionIndex === 0"
                    type="checkbox"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    :for="`${field.name}_${optionIndex}`"
                    class="text-sm text-slate-700 cursor-pointer"
                  >
                    {{ option.label }}
                  </label>
                </div>
              </div>
            </div>

            <!-- Radio Group Fields -->
            <div v-if="field.element === 'radio-group'" class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">
                {{ field.label }}
                <span v-if="field.required" class="text-red-500 ml-1">*</span>
              </label>
              <div class="space-y-3">
                <div
                  v-for="(option, optionIndex) in field.options"
                  :key="optionIndex"
                  class="flex items-center space-x-3"
                >
                  <input
                    :id="`${field.name}_${optionIndex}`"
                    v-model="formValues[field.name]"
                    :name="field.name"
                    :value="option.value"
                    :class="field.class"
                    :required="field.required"
                    type="radio"
                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                  />
                  <label
                    :for="`${field.name}_${optionIndex}`"
                    class="text-sm text-slate-700 cursor-pointer"
                  >
                    {{ option.label }}
                  </label>
                </div>
              </div>
            </div>

            <!-- Date Picker Fields -->
            <div v-if="field.element === 'date-picker'" class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">
                {{ field.label }}
                <span v-if="field.required" class="text-red-500 ml-1">*</span>
              </label>
              <input
                :type="field.dateType || 'date'"
                v-model="formValues[field.name]"
                :name="field.name"
                :class="field.class"
                :placeholder="field.placeholder"
                :required="field.required"
                :min="field.minDate"
                :max="field.maxDate"
                :autocomplete="field.autocomplete"
                class="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            <!-- Time Picker Fields -->
            <div v-if="field.element === 'time-picker'" class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">
                {{ field.label }}
                <span v-if="field.required" class="text-red-500 ml-1">*</span>
              </label>
              <input
                type="time"
                v-model="formValues[field.name]"
                :name="field.name"
                :class="field.class"
                :placeholder="field.placeholder"
                :required="field.required"
                :min="field.minTime"
                :max="field.maxTime"
                :step="field.step || '300'"
                :autocomplete="field.autocomplete"
                class="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
            </div>

            <!-- Number Input Fields -->
            <div v-if="field.element === 'number-input'" class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">
                {{ field.label }}
                <span v-if="field.required" class="text-red-500 ml-1">*</span>
              </label>
              <div class="relative">
                <input
                  type="number"
                  v-model="formValues[field.name]"
                  :name="field.name"
                  :class="field.class"
                  :placeholder="field.placeholder"
                  :required="field.required"
                  :min="field.min"
                  :max="field.max"
                  :step="field.step || '1'"
                  :autocomplete="field.autocomplete"
                  class="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                />
                <div v-if="field.prefix || field.suffix" class="absolute inset-y-0 flex items-center pointer-events-none">
                  <span v-if="field.prefix" class="left-0 pl-3 text-slate-500 text-sm">
                    {{ field.prefix }}
                  </span>
                  <span v-if="field.suffix" class="right-0 pr-3 text-slate-500 text-sm">
                    {{ field.suffix }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Phone Input Fields -->
            <div v-if="field.element === 'phone-input'" class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">
                {{ field.label }}
                <span v-if="field.required" class="text-red-500 ml-1">*</span>
              </label>
              <div class="flex">
                <select
                  v-if="field.showCountryCode"
                  v-model="formValues[field.name + '_country']"
                  :name="`${field.name}_country`"
                  class="flex-shrink-0 px-3 py-2 border border-r-0 border-slate-300 rounded-l-md bg-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+33">🇫🇷 +33</option>
                  <option value="+49">🇩🇪 +49</option>
                  <option value="+81">🇯🇵 +81</option>
                  <option value="+86">🇨🇳 +86</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+55">🇧🇷 +55</option>
                  <option value="+7">🇷🇺 +7</option>
                </select>
                <input
                  type="tel"
                  v-model="formValues[field.name]"
                  :name="field.name"
                  :placeholder="field.placeholder"
                  :required="field.required"
                  :pattern="field.pattern"
                  :autocomplete="field.autocomplete || 'tel'"
                  :class="[
                    'flex-1 px-3 py-2 border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors',
                    field.class,
                    field.showCountryCode ? 'rounded-r-md' : 'rounded-md'
                  ]"
                />
              </div>
            </div>

            <!-- Button Fields -->
            <div v-if="field.element === 'button'" class="pt-4">
              <button
                :type="field.type"
                :class="field.class"
                :disabled="submitting"
              >
                <span v-if="submitting && field.type === 'submit'">
                  <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Submitting...
                </span>
                <span v-else>{{ field.text }}</span>
              </button>
            </div>
          </div>

          <!-- Form Footer -->
          <div v-if="hasSubmitButton" class="pt-4 border-t border-slate-200">
            <p class="text-xs text-slate-500 text-center">
              Powered by Vue FormBuilder
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useFormStorage } from '../utils/formStorage.js'

// Props
const props = defineProps({
  formId: {
    type: String,
    required: true
  },
  endpoint: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    default: 'default'
  }
})

// State
const loading = ref(true)
const error = ref(false)
const submitted = ref(false)
const submitting = ref(false)
const submitError = ref('')
const formData = ref([])
const formValues = ref({})
const { retrieve } = useFormStorage()

// Computed
const themeClass = computed(() => {
  return {
    'theme-default': props.theme === 'default',
    'theme-minimal': props.theme === 'minimal'
  }
})

const hasSubmitButton = computed(() => {
  return formData.value.some(field => field.element === 'button' && field.type === 'submit')
})

// Methods
const loadFormData = async () => {
  try {
    loading.value = true
    error.value = false

    // Load form data using storage utility
    const storedForm = retrieve(props.formId)

    if (storedForm && storedForm.data) {
      formData.value = storedForm.data

      // Initialize form values
      initializeFormValues()
    } else {
      error.value = true
    }
  } catch (err) {
    console.error('Error loading form data:', err)
    error.value = true
  } finally {
    loading.value = false
  }
}

const initializeFormValues = () => {
  const values = {}
  formData.value.forEach(field => {
    if (field.name) {
      // Initialize different field types with appropriate default values
      switch (field.element) {
        case 'checkbox':
          values[field.name] = field.checked || false
          break
        case 'checkbox-group':
          values[field.name] = []
          break
        case 'radio-group':
          values[field.name] = ''
          break
        case 'number-input':
          values[field.name] = ''
          break
        case 'phone-input':
          values[field.name] = ''
          if (field.showCountryCode) {
            values[field.name + '_country'] = '+1'
          }
          break
        default:
          values[field.name] = ''
      }
    }
  })
  formValues.value = values
}

const submitForm = async () => {
  if (submitting.value) return

  try {
    submitting.value = true
    submitError.value = ''

    // Prepare form data
    const submissionData = {
      formId: props.formId,
      timestamp: new Date().toISOString(),
      data: { ...formValues.value }
    }

    // Submit to user's endpoint
    const response = await fetch(props.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData)
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    // Success
    submitted.value = true

    // Optional: Track submission for analytics
    trackSubmission()

  } catch (err) {
    console.error('Form submission error:', err)
    submitError.value = 'Failed to submit form. Please try again.'
  } finally {
    submitting.value = false
  }
}

const resetForm = () => {
  submitted.value = false
  submitError.value = ''
  initializeFormValues()
}

const trackSubmission = () => {
  // Optional analytics tracking
  try {
    const event = {
      type: 'form_submission',
      formId: props.formId,
      timestamp: new Date().toISOString()
    }

    // Could send to analytics service here
    console.log('Form submitted:', event)
  } catch (err) {
    // Silent fail for analytics
    console.warn('Analytics tracking failed:', err)
  }
}

// Lifecycle
onMounted(() => {
  loadFormData()
})
</script>

<style scoped>
.standalone-form-container {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem;
  background: white;
  min-height: 100vh;
}

/* Default Theme */
.theme-default {
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
}

/* Minimal Theme */
.theme-minimal {
  background: white;
}

.theme-minimal .bg-white.rounded-xl.shadow-lg {
  box-shadow: none;
  border: 1px solid #e2e8f0;
}

/* Responsive Design */
@media (max-width: 640px) {
  .standalone-form-container {
    padding: 1rem 0.5rem;
  }

  .bg-white.rounded-xl.shadow-lg {
    padding: 1.5rem;
  }
}

/* Focus states and animations */
input:focus, textarea:focus, select:focus {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}

button[type="submit"] {
  transition: all 0.2s ease;
}

button[type="submit"]:hover:not(:disabled) {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

button[type="submit"]:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Loading animation */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
