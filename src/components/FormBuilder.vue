<template>
  <div class="w-full">
    <!-- Form Fields Area -->
    <div class="mb-6">
      <!-- Field Types Panel -->
      <div>
        <h3 class="text-sm font-semibold text-slate-700 mb-3">Add Field Types</h3>
        <div class="grid grid-cols-2 gap-2 mb-4">
          <button
              @click="headerField"
              class="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
          >
            <span
                class="w-8 h-8 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-2 transition-colors"
            >
              <svg
                  class="w-4 h-4 text-slate-600 group-hover:text-blue-600" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor"
              >
                <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
            </span>
            <span class="text-xs font-medium text-slate-700 group-hover:text-blue-700">Header</span>
          </button>

          <button
              @click="paragraphField"
              class="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
          >
            <span
                class="w-8 h-8 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-2 transition-colors"
            >
              <svg
                  class="w-4 h-4 text-slate-600 group-hover:text-blue-600" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor"
              >
                <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </span>
            <span class="text-xs font-medium text-slate-700 group-hover:text-blue-700">Paragraph</span>
          </button>

          <button
              @click="textField"
              class="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
          >
            <span
                class="w-8 h-8 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-2 transition-colors"
            >
              <svg
                  class="w-4 h-4 text-slate-600 group-hover:text-blue-600" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor"
              >
                <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </span>
            <span class="text-xs font-medium text-slate-700 group-hover:text-blue-700">Short Answer</span>
          </button>

          <button
              @click="textareaField"
              class="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
          >
            <span
                class="w-8 h-8 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-2 transition-colors"
            >
              <svg
                  class="w-4 h-4 text-slate-600 group-hover:text-blue-600" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor"
              >
                <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </span>
            <span class="text-xs font-medium text-slate-700 group-hover:text-blue-700">Long Answer</span>
          </button>

          <button
              @click="selectField"
              class="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
          >
            <span
                class="w-8 h-8 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-2 transition-colors"
            >
              <svg
                  class="w-4 h-4 text-slate-600 group-hover:text-blue-600" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor"
              >
                <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                />
              </svg>
            </span>
            <span class="text-xs font-medium text-slate-700 group-hover:text-blue-700">Select</span>
          </button>

          <button
              @click="submitButton"
              class="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
          >
            <span
                class="w-8 h-8 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-2 transition-colors"
            >
              <svg
                  class="w-4 h-4 text-slate-600 group-hover:text-blue-600" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor"
              >
                <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </span>
            <span class="text-xs font-medium text-slate-700 group-hover:text-blue-700">Button</span>
          </button>

          <button
              @click="checkboxField"
              class="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
          >
            <span
                class="w-8 h-8 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-2 transition-colors"
            >
              <svg
                  class="w-4 h-4 text-slate-600 group-hover:text-blue-600" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor"
              >
                <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="text-xs font-medium text-slate-700 group-hover:text-blue-700">Checkbox</span>
          </button>

          <button
              @click="checkboxGroupField"
              class="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
          >
            <span
                class="w-8 h-8 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-2 transition-colors"
            >
              <svg
                  class="w-4 h-4 text-slate-600 group-hover:text-blue-600" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor"
              >
                <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </span>
            <span class="text-xs font-medium text-slate-700 group-hover:text-blue-700">Checkboxes</span>
          </button>

          <button
              @click="radioGroupField"
              class="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
          >
            <span
                class="w-8 h-8 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-2 transition-colors"
            >
              <svg
                  class="w-4 h-4 text-slate-600 group-hover:text-blue-600" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor"
              >
                <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                />
              </svg>
            </span>
            <span class="text-xs font-medium text-slate-700 group-hover:text-blue-700">Radio</span>
          </button>

          <button
              @click="datePickerField"
              class="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
          >
            <span
                class="w-8 h-8 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-2 transition-colors"
            >
              <svg
                  class="w-4 h-4 text-slate-600 group-hover:text-blue-600" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor"
              >
                <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </span>
            <span class="text-xs font-medium text-slate-700 group-hover:text-blue-700">Date</span>
          </button>

          <button
              @click="timePickerField"
              class="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
          >
            <span
                class="w-8 h-8 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-2 transition-colors"
            >
              <svg
                  class="w-4 h-4 text-slate-600 group-hover:text-blue-600" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor"
              >
                <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
            <span class="text-xs font-medium text-slate-700 group-hover:text-blue-700">Time</span>
          </button>

          <button
              @click="numberInputField"
              class="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
          >
            <span
                class="w-8 h-8 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-2 transition-colors"
            >
              <svg
                  class="w-4 h-4 text-slate-600 group-hover:text-blue-600" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor"
              >
                <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                />
              </svg>
            </span>
            <span class="text-xs font-medium text-slate-700 group-hover:text-blue-700">Number</span>
          </button>

          <button
              @click="phoneInputField"
              class="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
          >
            <span
                class="w-8 h-8 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-2 transition-colors"
            >
              <svg
                  class="w-4 h-4 text-slate-600 group-hover:text-blue-600" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor"
              >
                <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </span>
            <span class="text-xs font-medium text-slate-700 group-hover:text-blue-700">Phone</span>
          </button>
        </div>

        <!-- Saved Forms Manager Section -->
        <div class="mb-4">
          <SavedFormsManager 
            :current-form="form" 
            @load-form="loadSavedForm"
            @form-saved="onFormSaved"
          />
        </div>

        <!-- Embed Generator Section -->
        <div class="mb-4">
          <EmbedGenerator :form-data="form" />
        </div>

        <button
            @click="clearForm"
            class="w-full px-4 py-2 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 hover:border-red-300 transition-colors"
        >
          <svg class="w-4 h-4 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Clear Form
        </button>
      </div>
    </div>

    <div
        v-if="!form.length"
        class="text-center py-12 border-2 border-dashed border-slate-300 rounded-lg bg-slate-50"
    >
      <div class="text-slate-400 mb-4">
        <svg class="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
              stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      </div>
      <p class="text-slate-500 font-medium">Start building your form</p>
      <p class="text-slate-400 text-sm mt-1">Select field types from below</p>
    </div>

    <div class="space-y-3">
      <div
          v-for="(field, index) in form" :key="index"
          @mouseover="displayOptions = index"
          @mouseleave="displayOptions = ''"
          class="group relative p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 bg-white"
      >

        <!-- Field Content -->
        <div class="flex items-start justify-between">
          <div class="flex-1">
            <div class="flex items-center gap-2 mb-2">
              <label class="text-sm font-medium text-slate-700">{{
                  field.label || field.text || getFieldDisplayName(field)
                }}</label>
              <span v-if="field.required" class="text-red-500 text-sm">*</span>
              <span class="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full">{{
                  field.element
                }}</span>
            </div>

            <!-- Field Preview -->
            <div class="opacity-75">
              <HeaderField v-if="field.element === 'header'" :field="field" />
              <ParagraphField v-if="field.element === 'p'" :field="field" />
              <SelectField v-if="field.element === 'select'" :field="field" />
              <InputField v-if="field.element === 'input'" :field="field" />
              <Checkbox v-if="field.element === 'checkbox'" :field="field" />
              <CheckboxGroup v-if="field.element === 'checkbox-group'" :field="field" />
              <RadioGroup v-if="field.element === 'radio-group'" :field="field" />
              <DatePicker v-if="field.element === 'date-picker'" :field="field" />
              <TimePicker v-if="field.element === 'time-picker'" :field="field" />
              <NumberInput v-if="field.element === 'number-input'" :field="field" />
              <PhoneInput v-if="field.element === 'phone-input'" :field="field" />

              <template v-if="field.element === 'textarea'">
                                    <textarea
                                        :name="field.name" :rows="field.rows" :class="field.class"
                                        :placeholder="field.placeholder || 'Enter text here...'" :required="field.required"
                                        class="w-full"
                                    ></textarea>
              </template>
              <template v-if="field.element === 'button'">
                <button :type="field.name" :class="field.class" class="inline-flex">{{
                    field.text || 'Button Text'
                  }}
                </button>
              </template>
            </div>
          </div>

          <!-- Action Buttons -->
          <div v-if="displayOptions === index" class="flex items-center gap-1 ml-4">
            <button
                @click="toggleMenu(index)"
                class="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
            <button
                @click="clearField(field, index)"
                class="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Configuration Panel -->
        <div v-if="toggleMenuId === index" class="mt-4 pt-4 border-t border-slate-200">
          <div class="bg-slate-50 rounded-lg p-4 space-y-4">
            <div v-if="field.textarea" class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">Text Content</label>
              <textarea
                  v-model='field.textarea'
                  class="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                  rows="3"
                  placeholder="Enter text content"
              ></textarea>
            </div>

            <div v-if="field.label" class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">Field Label</label>
              <input
                  type='text' v-model='field.label'
                  class='w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm'
                  placeholder='Enter field label'
              >
            </div>

            <div v-if="field.placeholder" class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">Placeholder Text</label>
              <input
                  type='text' v-model='field.placeholder'
                  class='w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm'
                  placeholder='Enter placeholder text'
              >
            </div>

            <div v-if="field.options" class="space-y-3">
              <label class="block text-sm font-medium text-slate-700">Options</label>
              <div class="space-y-2">
                <div
                    v-for="(option, optionIndex) in field.options" :key="optionIndex"
                    class="flex items-center gap-2 p-3 bg-white rounded-md border border-slate-200"
                >
                  <input
                      v-model="option.label"
                      placeholder="Option label"
                      class="flex-1 px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                  <input
                      v-model="option.value"
                      placeholder="Option value"
                      class="flex-1 px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                  <button
                      v-if="optionIndex !== 0"
                      @click="field.options.splice(optionIndex, 1)"
                      class="p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                  >
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                          stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <button
                    @click="field.options.push({label:'', value:''})"
                    type="button"
                    class="w-full px-3 py-2 text-sm text-blue-600 bg-blue-50 border border-blue-200 hover:bg-blue-100 rounded-md transition-colors"
                >
                  + Add Option
                </button>
              </div>
            </div>

            <div v-if="field.types" class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">Field Type</label>
              <select
                  v-model='field.type'
                  class='w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm'
              >
                <option value="">Choose type:</option>
                <option v-for="(type, typeIndex) in field.types" :key="typeIndex" :value="type">
                  {{ type }}
                </option>
              </select>
            </div>

            <div v-if="field.rows" class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">Number of Rows</label>
              <input
                  type='number' v-model='field.rows'
                  class='w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm'
                  placeholder='Enter number of rows' min="1" max="20"
              >
            </div>

            <div v-if="field.text" class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">Display Text</label>
              <input
                  type='text' v-model='field.text'
                  class='w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm'
                  placeholder='Enter display text'
              >
            </div>

            <div v-if="field.name" class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">Field Name</label>
              <input
                  type='text' v-model='field.name'
                  class='w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm'
                  placeholder='Enter field name'
              >
            </div>

            <div class="space-y-2">
              <label class="block text-sm font-medium text-slate-700">CSS Classes</label>
              <input
                  type='text'
                  v-model='field.class'
                  class='w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm'
                  placeholder='Enter CSS classes'
              >
            </div>

            <div v-if="field.requiredField" class="flex items-center space-x-3">
              <input
                  type='checkbox' v-model='field.required'
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              >
              <label class="text-sm font-medium text-slate-700">Required field</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, watch} from 'vue'
import HeaderField from './Fields/Header.vue'
import ParagraphField from './Fields/Paragraph.vue'
import SelectField from './Fields/Select.vue'
import InputField from './Fields/Input.vue'
import Checkbox from './Fields/Checkbox.vue'
import CheckboxGroup from './Fields/CheckboxGroup.vue'
import RadioGroup from './Fields/RadioGroup.vue'
import DatePicker from './Fields/DatePicker.vue'
import TimePicker from './Fields/TimePicker.vue'
import NumberInput from './Fields/NumberInput.vue'
import PhoneInput from './Fields/PhoneInput.vue'
import EmbedGenerator from './EmbedGenerator.vue'
import SavedFormsManager from './SavedFormsManager.vue'

// Define props for v-model support
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['form', 'update:modelValue'])

// Reactive state - initialize with modelValue if provided
const form = ref([...props.modelValue])
const toggleMenuId = ref('')
const displayOptions = ref('')

// Use a deep watcher to emit changes to parent
watch(form, (newForm) => {
  emit('update:modelValue', newForm)
}, {deep: true})

// Methods (keep these as-is)
const textField = () => {
  form.value.push({
    element: 'input',
    label: 'Label',
    placeholder: 'Placeholder',
    types: ['text', 'email', 'tel', 'date', 'number'],
    type: 'text',
    name: 'text-' + Math.floor(100000 + Math.random() * 900000),
    class: 'py-1 px-4 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300',
    requiredField: 'required',
    required: false,
    autocomplete: 'off'
  })
}

const textareaField = () => {
  form.value.push({
    element: 'textarea',
    label: 'Label',
    placeholder: 'Placeholder',
    name: 'textarea-' + Math.floor(100000 + Math.random() * 900000),
    rows: '5',
    class: 'py-1 px-4 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300',
    requiredField: 'required',
    required: false
  })
}

const submitButton = () => {
  form.value.push({
    element: 'button',
    types: ['button', 'submit'],
    type: 'submit',
    class: 'bg-blue-200 px-4 py-2 rounded shadow mt-2 focus:outline-none hover:bg-blue-300',
    text: 'Submit'
  })
}

const headerField = () => {
  form.value.push({
    element: 'header',
    types: ['h1', 'h2', 'h3', 'h4'],
    type: 'h1',
    class: 'text-gray-900',
    text: 'Header',
  });
}

const paragraphField = () => {
  form.value.push({
    element: 'p',
    textarea: 'Paragraph',
    class: 'text-gray-700',
  })
}

const selectField = () => {
  form.value.push({
    text: 'Label',
    element: 'select',
    class: 'py-1 px-4 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300',
    name: 'text-' + Math.floor(100000 + Math.random() * 900000),
    requiredField: 'required',
    required: false,
    options: [
      {
        label: 'Option 1',
        value: 'option-1'
      },
      {
        label: 'Option 2',
        value: 'option-2'
      },
      {
        label: 'Option 3',
        value: 'option-3'
      }
    ],
  })
}

const toggleMenu = (index) => {
  if (toggleMenuId.value !== index) {
    toggleMenuId.value = index
  } else {
    toggleMenuId.value = ''
  }
}

const clearField = (field, index) => {
  form.value.splice(index, 1)
}

const clearForm = () => {
  form.value = []
}

// New field type methods
const checkboxField = () => {
  form.value.push({
    element: 'checkbox',
    label: 'Checkbox Field',
    checkboxLabel: 'Check this option',
    name: 'checkbox-' + Math.floor(100000 + Math.random() * 900000),
    class: '',
    requiredField: 'required',
    required: false,
    checked: false
  })
}

const checkboxGroupField = () => {
  form.value.push({
    element: 'checkbox-group',
    label: 'Checkbox Group',
    name: 'checkbox-group-' + Math.floor(100000 + Math.random() * 900000),
    class: '',
    requiredField: 'required',
    required: false,
    options: [
      { label: 'Option 1', value: 'option-1' },
      { label: 'Option 2', value: 'option-2' },
      { label: 'Option 3', value: 'option-3' }
    ]
  })
}

const radioGroupField = () => {
  form.value.push({
    element: 'radio-group',
    label: 'Radio Group',
    name: 'radio-group-' + Math.floor(100000 + Math.random() * 900000),
    class: '',
    requiredField: 'required',
    required: false,
    options: [
      { label: 'Option 1', value: 'option-1' },
      { label: 'Option 2', value: 'option-2' },
      { label: 'Option 3', value: 'option-3' }
    ]
  })
}

const datePickerField = () => {
  form.value.push({
    element: 'date-picker',
    label: 'Date',
    placeholder: 'Select date',
    dateType: 'date',
    dateTypes: ['date', 'datetime-local', 'month', 'week'],
    name: 'date-' + Math.floor(100000 + Math.random() * 900000),
    class: '',
    requiredField: 'required',
    required: false,
    minDate: '',
    maxDate: '',
    autocomplete: 'off'
  })
}

const timePickerField = () => {
  form.value.push({
    element: 'time-picker',
    label: 'Time',
    placeholder: 'Select time',
    name: 'time-' + Math.floor(100000 + Math.random() * 900000),
    class: '',
    requiredField: 'required',
    required: false,
    minTime: '',
    maxTime: '',
    step: '300',
    autocomplete: 'off'
  })
}

const numberInputField = () => {
  form.value.push({
    element: 'number-input',
    label: 'Number',
    placeholder: 'Enter number',
    name: 'number-' + Math.floor(100000 + Math.random() * 900000),
    class: '',
    requiredField: 'required',
    required: false,
    min: '',
    max: '',
    step: '1',
    prefix: '',
    suffix: '',
    autocomplete: 'off'
  })
}

const phoneInputField = () => {
  form.value.push({
    element: 'phone-input',
    label: 'Phone Number',
    placeholder: '(555) 123-4567',
    name: 'phone-' + Math.floor(100000 + Math.random() * 900000),
    class: '',
    requiredField: 'required',
    required: false,
    showCountryCode: true,
    pattern: '',
    autocomplete: 'tel'
  })
}

const getFieldDisplayName = (field) => {
  switch (field.element) {
    case 'header':
      return 'Header Field'
    case 'p':
      return 'Paragraph Field'
    case 'input':
      return 'Input Field'
    case 'textarea':
      return 'Textarea Field'
    case 'select':
      return 'Select Field'
    case 'button':
      return 'Button Field'
    case 'checkbox':
      return 'Checkbox Field'
    case 'checkbox-group':
      return 'Checkbox Group'
    case 'radio-group':
      return 'Radio Group'
    case 'date-picker':
      return 'Date Field'
    case 'time-picker':
      return 'Time Field'
    case 'number-input':
      return 'Number Field'
    case 'phone-input':
      return 'Phone Field'
    default:
      return 'Untitled Field'
  }
}

const loadSavedForm = (formData) => {
  form.value = [...formData]
}

const onFormSaved = (formId) => {
  // Optional: Could emit event to parent or show notification
  console.log('Form saved with ID:', formId)
}
</script>
