<template>
    <div class="w-full space-y-6">
        <!-- Form Fields Area -->
        <div>
            <div v-if="!form.length" class="text-center py-8 border-2 border-dashed border-slate-300 rounded-lg bg-slate-50">
                <div class="text-slate-400 mb-3">
                    <svg class="w-10 h-10 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <p class="text-slate-500 font-medium text-sm">Start building your form</p>
                <p class="text-slate-400 text-xs mt-1">Select field types below</p>
            </div>
            
            <div class="space-y-3">
                <div v-for="(field, index) in form" :key="index" 
                     @mouseover="displayOptions = index" 
                     @mouseleave="displayOptions = ''" 
                     class="group relative p-3 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 bg-white">
                    
                    <!-- Field Content -->
                    <div class="flex items-start justify-between">
                        <div class="flex-1 min-w-0">
                            <div class="flex items-center gap-2 mb-2">
                                <label class="text-sm font-medium text-slate-700 truncate">{{ field.label || field.text || 'Untitled Field' }}</label>
                                <span v-if="field.required" class="text-red-500 text-xs">*</span>
                                <span class="text-xs px-2 py-0.5 bg-slate-100 text-slate-600 rounded-full">{{ field.element }}</span>
                            </div>
                            
                            <!-- Field Preview -->
                            <div class="opacity-75 text-xs">
                                <HeaderField v-if="field.element === 'header'" :field="field" />
                                <ParagraphField v-if="field.element === 'p'" :field="field" />
                                <SelectField v-if="field.element === 'select'" :field="field" />
                                <InputField v-if="field.element === 'input'" :field="field" />
                                
                                <template v-if="field.element === 'textarea'">
                                    <textarea :name="field.name" :rows="field.rows" :class="field.class" :placeholder="field.placeholder" :required="field.required" class="w-full text-xs"></textarea>
                                </template>
                                <template v-if="field.element === 'button'">
                                    <button :type="field.name" :class="field.class" class="inline-flex text-xs">{{ field.text }}</button>
                                </template>
                            </div>
                        </div>
                        
                        <!-- Action Buttons -->
                        <div v-if="displayOptions === index" class="flex items-center gap-1 ml-2">
                            <button @click="toggleMenu(index)" 
                                    class="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors">
                                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </button>
                            <button @click="clearField(field, index)" 
                                    class="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors">
                                <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Configuration Panel -->
                    <div v-if="toggleMenuId === index" class="mt-3 pt-3 border-t border-slate-200">
                        <div class="bg-slate-50 rounded-lg p-3 space-y-3 text-sm">
                            <div v-if="field.textarea" class="space-y-1">
                                <label class="block text-xs font-medium text-slate-700">Text Content</label>
                                <textarea v-model='field.textarea' 
                                         class="w-full px-2 py-1 border border-slate-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                                         rows="2"
                                         placeholder="Enter text content"></textarea>
                            </div>
                            
                            <div v-if="field.label" class="space-y-1">
                                <label class="block text-xs font-medium text-slate-700">Field Label</label>
                                <input type='text' v-model='field.label'
                                       class='w-full px-2 py-1 border border-slate-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500' 
                                       placeholder='Enter field label'>
                            </div>
                            
                            <div v-if="field.placeholder" class="space-y-1">
                                <label class="block text-xs font-medium text-slate-700">Placeholder Text</label>
                                <input type='text' v-model='field.placeholder'
                                       class='w-full px-2 py-1 border border-slate-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500' 
                                       placeholder='Enter placeholder text'>
                            </div>
                            
                            <div v-if="field.options" class="space-y-2">
                                <label class="block text-xs font-medium text-slate-700">Options</label>
                                <div class="space-y-1">
                                    <div v-for="(option, optionIndex) in field.options" :key="optionIndex" 
                                         class="flex items-center gap-1 p-2 bg-white rounded border border-slate-200">
                                        <input v-model="option.label" 
                                               placeholder="Label" 
                                               class="flex-1 px-2 py-1 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                                        <input v-model="option.value" 
                                               placeholder="Value" 
                                               class="flex-1 px-2 py-1 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
                                        <button v-if="optionIndex !== 0" 
                                                @click="field.options.splice(optionIndex, 1)" 
                                                class="p-1 text-red-500 hover:bg-red-50 rounded transition-colors">
                                            <svg class="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <button @click="field.options.push({label:'', value:''})" 
                                            type="button" 
                                            class="w-full px-2 py-1 text-xs text-blue-600 bg-blue-50 border border-blue-200 hover:bg-blue-100 rounded transition-colors">
                                        + Add Option
                                    </button>
                                </div>
                            </div>
                            
                            <div v-if="field.types" class="space-y-1">
                                <label class="block text-xs font-medium text-slate-700">Field Type</label>
                                <select v-model='field.type' 
                                        class='w-full px-2 py-1 border border-slate-300 rounded text-xs focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500'>
                                    <option value="">Choose type:</option>
                                    <option v-for="(type, typeIndex) in field.types" :key="typeIndex" :value="type">{{ type }}</option>
                                </select>
                            </div>
                            
                            <div v-if="field.requiredField" class="flex items-center space-x-2">
                                <input type='checkbox' v-model='field.required' 
                                       class="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-1">
                                <label class="text-xs font-medium text-slate-700">Required field</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Field Types Panel -->
        <div>
            <h3 class="text-sm font-semibold text-slate-700 mb-3">Add Field Types</h3>
            <div class="grid grid-cols-2 gap-2 mb-4">
                <button @click="headerField" 
                        class="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group">
                    <div class="w-6 h-6 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-1 transition-colors">
                        <svg class="w-3 h-3 text-slate-600 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <span class="text-xs font-medium text-slate-700 group-hover:text-blue-700">Header</span>
                </button>
                
                <button @click="paragraphField" 
                        class="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group">
                    <div class="w-6 h-6 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-1 transition-colors">
                        <svg class="w-3 h-3 text-slate-600 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>
                    <span class="text-xs font-medium text-slate-700 group-hover:text-blue-700">Paragraph</span>
                </button>

                <button @click="textField" 
                        class="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group">
                    <div class="w-6 h-6 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-1 transition-colors">
                        <svg class="w-3 h-3 text-slate-600 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                    </div>
                    <span class="text-xs font-medium text-slate-700 group-hover:text-blue-700">Short Answer</span>
                </button>

                <button @click="textareaField" 
                        class="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group">
                    <div class="w-6 h-6 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-1 transition-colors">
                        <svg class="w-3 h-3 text-slate-600 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                        </svg>
                    </div>
                    <span class="text-xs font-medium text-slate-700 group-hover:text-blue-700">Long Answer</span>
                </button>

                <button @click="selectField" 
                        class="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group">
                    <div class="w-6 h-6 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-1 transition-colors">
                        <svg class="w-3 h-3 text-slate-600 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                        </svg>
                    </div>
                    <span class="text-xs font-medium text-slate-700 group-hover:text-blue-700">Select</span>
                </button>

                <button @click="submitButton" 
                        class="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group">
                    <div class="w-6 h-6 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-1 transition-colors">
                        <svg class="w-3 h-3 text-slate-600 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>
                    <span class="text-xs font-medium text-slate-700 group-hover:text-blue-700">Button</span>
                </button>
            </div>
            
            <button @click="clearForm" 
                    class="w-full px-3 py-2 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 hover:border-red-300 transition-colors">
                <svg class="w-4 h-4 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Clear Form
            </button>
        </div>
    </div>
</template>

<script setup>
import {ref, watch} from 'vue'
import HeaderField from './Fields/Header.vue'
import ParagraphField from './Fields/Paragraph.vue'
import SelectField from './Fields/Select.vue'
import InputField from './Fields/Input.vue'

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

// Watch for external changes to modelValue (parent updates)
watch(() => props.modelValue, (newModelValue) => {
    form.value = [...newModelValue]
})

// Use a deep watcher to emit changes to parent
watch(form, (newForm) => {
    emit('update:modelValue', newForm)
}, { deep: true })

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
    if(toggleMenuId.value !== index) {
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
</script>