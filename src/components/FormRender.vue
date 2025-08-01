<template>
    <div>
      <div v-if="!props.formJson || props.formJson.length === 0" class="text-center py-12">
        <div class="text-slate-400 mb-4">
          <svg class="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 class="text-lg font-medium text-slate-500 mb-2">No form fields yet</h3>
        <p class="text-slate-400">Add some fields to see your form preview here</p>
      </div>

      <form v-else action="#" method="POST" class="max-w-2xl mx-auto space-y-6">
        <div v-for="(value, index) in props.formJson" :key="index" class="form-field-container">
          <!-- Header Fields -->
          <div v-if="value.element === 'header'" class="mb-6">
            <h1 v-if="!value.type || value.type === 'h1'" class="text-3xl font-bold text-slate-900 mb-2" :class="value.class">{{ value.text }}</h1>
            <h2 v-if="value.type === 'h2'" class="text-2xl font-bold text-slate-800 mb-2" :class="value.class">{{ value.text }}</h2>
            <h3 v-if="value.type === 'h3'" class="text-xl font-bold text-slate-700 mb-2" :class="value.class">{{ value.text }}</h3>
            <h4 v-if="value.type === 'h4'" class="text-lg font-bold text-slate-700 mb-2" :class="value.class">{{ value.text }}</h4>
          </div>

          <!-- Paragraph Fields -->
          <div v-if="value.element === 'p'" class="mb-4">
            <p class="text-slate-600 leading-relaxed" :class="value.class">{{ value.textarea }}</p>
          </div>

          <!-- Input Fields -->
          <div v-if="value.element === 'input'" class="space-y-2">
            <label class="block text-sm font-medium text-slate-700">
              {{ value.label }}
              <span v-if="value.required" class="text-red-500 ml-1">*</span>
            </label>
            <input
              :placeholder="value.placeholder"
              :type="value.type"
              :name="value.name"
              :required="value.required"
              :autocomplete="value.autocomplete"
              class="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              :class="value.class" />
          </div>

          <!-- Textarea Fields -->
          <div v-if="value.element === 'textarea'" class="space-y-2">
            <label class="block text-sm font-medium text-slate-700">
              {{ value.label }}
              <span v-if="value.required" class="text-red-500 ml-1">*</span>
            </label>
            <textarea
              :placeholder="value.placeholder"
              :name="value.name"
              :rows="value.rows"
              :required="value.required"
              :autocomplete="value.autocomplete"
              class="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
              :class="value.class"></textarea>
          </div>

          <!-- Select Fields -->
          <div v-if="value.element === 'select'" class="space-y-2">
            <label class="block text-sm font-medium text-slate-700">
              {{ value.text }}
              <span v-if="value.required" class="text-red-500 ml-1">*</span>
            </label>
            <select
              :name="value.name"
              :required="value.required"
              class="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              :class="value.class">
              <option value="">Choose an option...</option>
              <option v-for="(option, optionIndex) in value.options" :key="optionIndex" :value="option.value">
                {{ option.label }}
              </option>
            </select>
          </div>

          <!-- Checkbox Fields -->
          <div v-if="value.element === 'checkbox'" class="space-y-2">
            <div class="flex items-center space-x-3">
              <input
                :id="value.name"
                :name="value.name"
                :class="value.class"
                :required="value.required"
                :checked="value.checked"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label
                :for="value.name"
                class="text-sm text-slate-700 cursor-pointer"
              >
                {{ value.checkboxLabel || 'Checkbox label' }}
              </label>
            </div>
          </div>

          <!-- Checkbox Group Fields -->
          <div v-if="value.element === 'checkbox-group'" class="space-y-2">
            <label class="block text-sm font-medium text-slate-700">{{ value.label }}</label>
            <div class="space-y-3">
              <div
                v-for="(option, optionIndex) in value.options"
                :key="optionIndex"
                class="flex items-center space-x-3"
              >
                <input
                  :id="`${value.name}_${optionIndex}`"
                  :name="value.name"
                  :value="option.value"
                  :class="value.class"
                  :required="value.required && optionIndex === 0"
                  type="checkbox"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label
                  :for="`${value.name}_${optionIndex}`"
                  class="text-sm text-slate-700 cursor-pointer"
                >
                  {{ option.label }}
                </label>
              </div>
            </div>
          </div>

          <!-- Radio Group Fields -->
          <div v-if="value.element === 'radio-group'" class="space-y-2">
            <label class="block text-sm font-medium text-slate-700">{{ value.label }}</label>
            <div class="space-y-3">
              <div
                v-for="(option, optionIndex) in value.options"
                :key="optionIndex"
                class="flex items-center space-x-3"
              >
                <input
                  :id="`${value.name}_${optionIndex}`"
                  :name="value.name"
                  :value="option.value"
                  :class="value.class"
                  :required="value.required"
                  type="radio"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <label
                  :for="`${value.name}_${optionIndex}`"
                  class="text-sm text-slate-700 cursor-pointer"
                >
                  {{ option.label }}
                </label>
              </div>
            </div>
          </div>

          <!-- Date Picker Fields -->
          <div v-if="value.element === 'date-picker'" class="space-y-2">
            <label class="block text-sm font-medium text-slate-700">
              {{ value.label }}
              <span v-if="value.required" class="text-red-500 ml-1">*</span>
            </label>
            <input
              :type="value.dateType || 'date'"
              :name="value.name"
              :class="value.class"
              :placeholder="value.placeholder"
              :required="value.required"
              :min="value.minDate"
              :max="value.maxDate"
              :autocomplete="value.autocomplete"
              class="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          <!-- Time Picker Fields -->
          <div v-if="value.element === 'time-picker'" class="space-y-2">
            <label class="block text-sm font-medium text-slate-700">
              {{ value.label }}
              <span v-if="value.required" class="text-red-500 ml-1">*</span>
            </label>
            <input
              type="time"
              :name="value.name"
              :class="value.class"
              :placeholder="value.placeholder"
              :required="value.required"
              :min="value.minTime"
              :max="value.maxTime"
              :step="value.step || '300'"
              :autocomplete="value.autocomplete"
              class="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            />
          </div>

          <!-- Number Input Fields -->
          <div v-if="value.element === 'number-input'" class="space-y-2">
            <label class="block text-sm font-medium text-slate-700">
              {{ value.label }}
              <span v-if="value.required" class="text-red-500 ml-1">*</span>
            </label>
            <div class="relative">
              <input
                type="number"
                :name="value.name"
                :class="value.class"
                :placeholder="value.placeholder"
                :required="value.required"
                :min="value.min"
                :max="value.max"
                :step="value.step || '1'"
                :autocomplete="value.autocomplete"
                class="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              />
              <div v-if="value.prefix || value.suffix" class="absolute inset-y-0 flex items-center pointer-events-none">
                <span v-if="value.prefix" class="left-0 pl-3 text-slate-500 text-sm">
                  {{ value.prefix }}
                </span>
                <span v-if="value.suffix" class="right-0 pr-3 text-slate-500 text-sm">
                  {{ value.suffix }}
                </span>
              </div>
            </div>
          </div>

          <!-- Phone Input Fields -->
          <div v-if="value.element === 'phone-input'" class="space-y-2">
            <label class="block text-sm font-medium text-slate-700">
              {{ value.label }}
              <span v-if="value.required" class="text-red-500 ml-1">*</span>
            </label>
            <div class="flex">
              <select
                v-if="value.showCountryCode"
                :name="`${value.name}_country`"
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
                :name="value.name"
                :placeholder="value.placeholder"
                :required="value.required"
                :pattern="value.pattern"
                :autocomplete="value.autocomplete || 'tel'"
                :class="[
                  'flex-1 px-3 py-2 border border-slate-300 shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors',
                  value.class,
                  value.showCountryCode ? 'rounded-r-md' : 'rounded-md'
                ]"
              />
            </div>
          </div>

          <!-- Button Fields -->
          <div v-if="value.element === 'button'" class="pt-4">
            <button
              :type="value.type"
              :class="value.class"
            >
              {{ value.text }}
            </button>
          </div>
        </div>
      </form>
    </div>
</template>

<script setup>
// Define props with proper typing
const props = defineProps({
  formJson: {
    type: Array,
    default: () => []
  }
})
</script>
