# Vue 3 FormBuilder with TailwindCSS v4

A modern Vue 3 form builder component using the Composition API and TailwindCSS v4. Build dynamic forms with drag-and-drop functionality and render them from JSON configuration.

## ✨ Features

- **Vue 3 + Composition API**: Modern Vue.js with reactive composition functions
- **TailwindCSS v4**: Latest Tailwind with Oxide engine for better performance
- **TypeScript Ready**: Full TypeScript support with proper prop definitions
- **Vite Build System**: Fast development and optimized production builds
- **Rich Field Types**: Headers (h1-h4), paragraphs, inputs, textareas, selects, checkboxes, radio groups, date/time pickers, phone inputs, and number inputs
- **Form Validation**: Built-in required field validation
- **JSON Export/Import**: Save and restore form configurations
- **🚀 Embeddable Forms**: Generate code snippets to embed forms on any website
- **📝 Custom Endpoints**: Configure form submission endpoints for data handling
- **🎨 Multiple Embed Types**: iFrame, JavaScript widget, and direct HTML options

## 📦 Installation

```bash
npm install @jringeisen/vue-formbuilder
```

## 🏗️ Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Vue 3.4+

### Quick Start for Development

1. **Clone and install dependencies:**
```bash
git clone https://github.com/jringeisen/vue-formbuilder.git
cd vue-formbuilder
npm install
```

2. **Start development server:**
```bash
npm run dev
```

3. **Build the library:**
```bash
npm run build-lib    # Build library package
npm run build-embed  # Build embed functionality
npm run build-all    # Build everything
```

4. **Run linting:**
```bash
npm run lint
```

## 🚀 Getting Started

### Vue 3 Setup

**Option 1: Global Registration**
```javascript
import { createApp } from 'vue'
import VueFormBuilder from '@jringeisen/vue-formbuilder'
import '@jringeisen/vue-formbuilder/style.css'

const app = createApp(App)
app.use(VueFormBuilder)
app.mount('#app')
```

**Option 2: Component Import (Recommended)**
```javascript
import { FormBuilder, FormRender } from '@jringeisen/vue-formbuilder'
import '@jringeisen/vue-formbuilder/style.css'

export default {
  components: {
    FormBuilder,
    FormRender
  }
}
```

### Component API Reference

#### FormBuilder Component
Creates a visual form builder interface for designing forms.

**Props:**
- None required

**Events:**
- `@form` - Emitted when form configuration changes
  ```javascript
  // Event payload structure
  const formConfig = [
    {
      id: 'unique-id',
      element: 'input', // 'header', 'p', 'input', 'textarea', 'select', etc.
      type: 'text',     // field-specific attributes
      label: 'Field Label',
      required: true,
      // ... other field properties
    }
  ]
  ```

#### FormRender Component  
Renders a form from JSON configuration.

**Props:**
- `formJson` (Array, required) - Array of form field objects to render

### Basic Usage Examples

#### Building Forms with FormBuilder

```vue
<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
    <!-- Form Builder -->
    <div>
      <h2>Design Your Form</h2>
      <form-builder @form="handleFormUpdate" />
    </div>
    
    <!-- Live Preview -->
    <div>
      <h2>Live Preview</h2>
      <form-render :form-json="formData" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { FormBuilder, FormRender } from '@jringeisen/vue-formbuilder'

const formData = ref([])

const handleFormUpdate = (formConfig) => {
  formData.value = formConfig
  
  // Optional: Save to localStorage
  localStorage.setItem('myForm', JSON.stringify(formConfig))
  
  // Optional: Save to your backend
  // await saveFormToDatabase(formConfig)
}
</script>
```

#### Rendering Saved Forms

```vue
<template>
  <form-render 
    :form-json="savedFormConfig" 
    @submit="handleFormSubmission" 
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { FormRender } from '@jringeisen/vue-formbuilder'

const savedFormConfig = ref([])

onMounted(() => {
  // Load from localStorage
  const saved = localStorage.getItem('myForm')
  if (saved) {
    savedFormConfig.value = JSON.parse(saved)
  }
})

const handleFormSubmission = (formData) => {
  console.log('Form submitted:', formData)
  // Handle form submission
}
</script>
```

## 🚀 Embeddable Forms

Generate embeddable code snippets to integrate forms into any website. Perfect for embedding forms on WordPress, static sites, or any HTML page.

### Using the Embed Generator

1. **Build your form** using the FormBuilder component
2. **Click the "Embed" button** in the sidebar  
3. **Configure your submission endpoint** (where form data will be sent)
4. **Choose embed type** (iFrame, JavaScript, or Direct HTML)
5. **Copy the generated code** and paste it into your website

### Testing the Embed Feature

The project includes a demo page at `/public/embed-demo.html` to test embed functionality:

1. Start the dev server: `npm run dev`
2. Visit: `http://localhost:5173/embed-demo.html` 
3. Follow the instructions to test different embed types

### Embed Types

**iFrame Embed (Recommended)**
```html
<iframe
  src="https://your-domain.com/embed/FORM_ID?endpoint=YOUR_ENDPOINT"
  width="100%"
  height="auto"
  frameborder="0"
  style="border: none; min-height: 400px;"
  title="Form">
</iframe>
```

**JavaScript Widget**
```html
<div id="form-FORM_ID"></div>
<script>
  (function() {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://your-domain.com/embed/FORM_ID?endpoint=YOUR_ENDPOINT';
    iframe.width = '100%';
    iframe.height = 'auto';
    iframe.frameBorder = '0';
    iframe.style.border = 'none';
    iframe.style.minHeight = '400px';
    document.getElementById('form-FORM_ID').appendChild(iframe);
  })();
</script>
```

**Direct HTML**
- Complete standalone HTML form with inline styles
- No external dependencies required
- Perfect for email templates or simple integrations

### Form Submissions

Configure your endpoint to receive POST requests with JSON data:

```json
{
  "formId": "abc123",
  "timestamp": "2024-01-01T12:00:00Z",
  "data": {
    "field_name": "field_value",
    "email": "user@example.com"
  }
}
```

## 🎨 Styling & Customization

The package includes TailwindCSS v4 styles. You have two options:

1. **Import the built CSS** (recommended):
```javascript
import '@jringeisen/vue-formbuilder/style.css'
```

2. **Use your own TailwindCSS setup** and import the raw components for full customization.

### Available Field Types

The form builder supports these field types:
- **Headers**: h1, h2, h3, h4 with customizable text
- **Paragraph**: Rich text content blocks  
- **Text Input**: Various input types (text, email, password, etc.)
- **Number Input**: Numeric inputs with validation
- **Phone Input**: Phone number formatting
- **Textarea**: Multi-line text input
- **Select**: Dropdown menus
- **Checkbox**: Single checkboxes 
- **Checkbox Group**: Multiple checkbox options
- **Radio Group**: Single-select radio buttons
- **Date Picker**: Date selection
- **Time Picker**: Time selection

## 🧪 Testing & Development

### Running Tests
```bash
npm run lint          # ESLint validation
npm run dev           # Development server
npm run build-all     # Build all targets
```

### Project Structure
```
src/
├── components/       # Core form components
│   ├── FormBuilder.vue
│   ├── FormRender.vue  
│   ├── Fields/       # Individual field components
│   └── index.js      # Main export file
├── embed/           # Embed functionality
├── utils/           # Utility functions
└── views/           # Demo pages
```

## 📋 Roadmap

- [X] Convert to a package
- [X] Add a form render component
- [X] Add embeddable forms functionality
- [X] Add custom submission endpoints
- [X] Multiple field types (checkboxes, radio, date/time, etc.)
- [ ] Drag-and-drop field reordering
- [ ] Form themes and styling options
- [ ] Advanced validation rules
- [ ] Analytics and submission tracking
- [ ] Form templates and presets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make your changes and test thoroughly
4. Run linting: `npm run lint`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🐛 Issues & Support  

Found a bug or need help? Please [open an issue](https://github.com/jringeisen/vue-formbuilder/issues) on GitHub.
