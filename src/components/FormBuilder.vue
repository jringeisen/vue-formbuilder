<template>
    <div class="max-w-4xl mx-auto">
        <div class="flex">
            <div class="w-2/3 h-auto mr-3">
                <h4 class="mt-5 text-center text-muted" v-if="!form.length">CLICK A FIELD TO ADD IT HERE</h4>
                <form>
                    <div @mouseover="displayOptions = index" @mouseleave="displayOptions = ''" class='px-3 py-2 hover:bg-gray-200' v-for="(field, index) in form" :key="index">
                        <label class="text-sm font-medium text-gray-700">{{ field.label }}</label><span class="text-red-600" v-if="field.required">*</span>
                        <span v-if="displayOptions === index" class="flex float-right">
                            <a class="pr-1 text-xs text-gray-400" @click.prevent="toggleMenu(index)" role='button' aria-expanded='false'>
                              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </a>
                            <a class="text-xs text-gray-400" href="#" role='button' @click.prevent="clearField(field, index)">
                              <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </a>
                        </span>
                        <header-field v-if="field.input === 'header'" :field="field" />

                        <paragraph-field v-if="field.input === 'p'" :field="field" />

                        <select-field v-if="field.input === 'select'" :field="field" />
                        
                        <input-field v-if="field.input === 'input'" :field="field" />
                            
                        <template v-if="field.input === 'textarea'">
                            <textarea :name="field.name" :rows="field.rows" :class="field.class" :placeholder="field.placeholder" :required="field.required"></textarea>
                        </template>
                        <template v-if="field.input === 'button'">
                            <button :type="field.name" :class="field.class">{{ field.text }}</button>
                        </template>
                        <div v-if="toggleMenuId === index">
                            <div class='px-3 py-2 mt-2 bg-gray-300 rounded-lg'>
                                <div class="flex items-center mt-2" v-if="field.textarea">
                                    <label class="w-1/3">Text</label>
                                    <textarea class="w-2/3 px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300" v-model='field.textarea'></textarea>
                                </div>
                                <div class="form-row">
                                    <div class="flex items-center mt-2" v-if="field.label">
                                        <label class="w-1/3">Label</label>
                                        <input type='text' class='w-2/3 px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300' placeholder='Enter label here'  v-model='field.label' >
                                    </div>
                                    <div class="flex items-center mt-2" v-if="field.placeholder">
                                        <label class="w-1/3">Placeholder</label>
                                        <input type='text' class='w-2/3 px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300' placeholder='Enter placeholder here' v-model='field.placeholder' >
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="flex items-center mt-2" v-if="field.options">
                                        <label class="w-1/3">Options</label>
                                        <div class="bg-white p-4 w-2/3">
                                            <div class="flex mt-2 items-center" :class="{'mr-4': index === 0}" v-for="(option, index) in field.options" :key="index">
                                                <input v-model="option.label" placeholder="Label" class="w-1/2 mr-2 px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300">
                                                <input v-model="option.value" placeholder="Value" class="w-1/2 px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300">
                                                <div v-if="index !== 0" @click.prevent="field.options.splice(index, 1)" class="text-red-600 ml-2 cursor-pointer">x</div>
                                            </div>
                                            <div class="flex justify-end mt-3">
                                                <button @click.prevent="field.options.push({label:'', value:''})" type="button" class="px-3 py-1 text-xs rounded-lg bg-white border border-gray hover:bg-gray-200 focus:outline-none focus:border-gray-300">Add Option</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="flex mt-2" v-if="field.types">
                                        <label class="w-1/3">Type</label>
                                        <select class='w-2/3 px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300' v-model='field.type'>
                                            <option value="">Choose type:</option>
                                            <option v-for="(type, index) in field.types" :key="index" :value="type">{{ type }}</option>
                                        </select>
                                    </div>
                                    <div class="flex mt-2" v-if="field.rows">
                                        <label class="w-1/3">Rows</label>
                                        <input type='text' class='w-2/3 px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300' placeholder='Enter rows here' v-model='field.rows' >
                                    </div>
                                    <div class="flex mt-2" v-if="field.text">
                                        <label class="w-1/3">Text</label>
                                        <input type='text' class='w-2/3 px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300' placeholder='Enter text here' v-model='field.text' >
                                    </div>
                                    <div class="flex mt-2" v-if="field.name">
                                        <label class="w-1/3">Name</label>
                                        <input type='text' class='w-2/3 px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300' placeholder='Enter name here' v-model='field.name' >
                                    </div>
                                    <div class="flex mt-2" v-if="field.class">
                                        <label class="w-1/3">Class</label>
                                        <input type='text' class='w-2/3 px-4 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300' placeholder='Enter class here' v-model='field.class' >
                                    </div>
                                    <div class="flex items-center mt-2" v-if="field.requiredField">
                                        <label class="w-1/3">Required</label>
                                        <div class="w-2/3 flex justify-left">
                                            <input type='checkbox' class="rounded-md" v-model='field.required' >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div class="flex flex-col w-1/3">
                <div class="grid grid-cols-2 gap-0 rounded-lg overflow-hidden border border-gray-200">
                    <div class="flex items-center px-4 py-6 bg-white border border-gray-100 cursor-pointer hover:bg-gray-200" @click="headerField">
                        <p class="w-full text-center">Header</p>
                    </div>
                    
                    <div class="flex items-center px-4 py-6 bg-white border border-gray-100 cursor-pointer hover:bg-gray-200" @click="paragraphField">
                        <p class="w-full text-center">Paragraph</p>
                    </div>

                    <div class="flex items-center px-4 py-6 bg-white border border-gray-100 cursor-pointer hover:bg-gray-200" @click="textField">
                        <p class="w-full text-center">Short Answer</p>
                    </div>

                    <div class="flex items-center px-4 py-6 bg-white border border-gray-100 cursor-pointer hover:bg-gray-200" @click="textareaField">
                        <p class="w-full text-center">Long Answer</p>
                    </div>

                    <div class="flex items-center px-4 py-6 bg-white border border-gray-100 cursor-pointer hover:bg-gray-200" @click="selectField">
                        <p class="w-full text-center">Select</p>
                    </div>

                    <div class="flex items-center px-4 py-6 bg-white border border-gray-100 cursor-pointer hover:bg-gray-200" @click="submitButton">
                        <p class="w-full text-center">Button</p>
                    </div>
                </div>
                <button class="px-2 py-2 mt-2 bg-blue-200 rounded-lg shadow focus:outline-none hover:bg-blue-300" @click.prevent="clearForm"><i class="far fa-times-circle"></i> Clear Form</button>
            </div>
        </div>
    </div>
</template>

<script>
import HeaderField from './Fields/Header'
import ParagraphField from './Fields/Paragraph.vue'
import SelectField from './Fields/Select.vue'
import InputField from './Fields/Input.vue'
    export default {
        components: { 
            HeaderField,
            ParagraphField,
            SelectField,
            InputField
        },
        data () {
            return {
                form: [],
                toggleMenuId: '',
                displayOptions: ''
            }
        },

        updated () {
            this.$emit('form', this.form)
        },

        methods: {
            textField () {
                this.form.push({
                    input: 'input',
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
            },
            textareaField () {
                this.form.push({
                    input: 'textarea',
                    label: 'Label',
                    placeholder: 'Placeholder',
                    name: 'textarea-' + + Math.floor(100000 + Math.random() * 900000),
                    rows: '5',
                    class: 'py-1 px-4 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300',
                    requiredField: 'required',
                    required: false
                })
            },
            submitButton () {
                this.form.push({
                    input: 'button',
                    types: ['button', 'submit'],
                    type: 'submit',
                    class: 'bg-blue-200 px-4 py-2 rounded shadow mt-2 focus:outline-none hover:bg-blue-300',
                    text: 'Submit'
                })
            },
            headerField () {
                this.form.push({
                    input: 'header',
                    types: ['h1', 'h2', 'h3', 'h4'],
                    type: 'h1',
                    text: 'Header',
                    class: 'text-gray-900',
                })
            },
            paragraphField () {
                this.form.push({
                    input: 'p',
                    textarea: 'Paragraph',
                    class: 'text-gray-700',
                })
            },
            selectField () {
                this.form.push({
                    label: 'Label',
                    input: 'select',
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
            },
            toggleMenu (index) {
                if(this.toggleMenuId !== index) {
                    this.toggleMenuId = index
                } else {
                    this.toggleMenuId = ''
                }
            },
            clearField (field, index) {
                this.form.splice(index, 1);
            },
            removeOption (options, id) {
                options.splice(id, 1)
            },
            clearForm () {
                this.form = []
            },
        }
    }
</script>
