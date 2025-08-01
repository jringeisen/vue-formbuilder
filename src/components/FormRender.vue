<template>
    <div>
      <form action="#" method="POST">
        <div v-if="props.formJson" class="w-1/2 mx-auto mt-6">
          <span v-for="(value, index) in props.formJson" :key="index">
            <div v-if="value.element === 'header'" class="px-3 py-2">
              <h1 v-if="!value.type || value.type === 'h1'" class="text-2xl font-bold" :class="value.class">{{ value.text }}</h1>
              <h2 v-if="value.type === 'h2'" class="text-xl font-bold" :class="value.class">{{ value.text }}</h2>
              <h3 v-if="value.type === 'h3'" class="text-lg font-bold" :class="value.class">{{ value.text }}</h3>
              <h4 v-if="value.type === 'h4'" class="font-bold text-md" :class="value.class">{{ value.text }}</h4>
            </div>

            <div v-if="value.element === 'p'" class="px-3 py-2">
              <p :class="value.class">{{ value.textarea }}</p>
            </div>
            
            <div v-if="value.element === 'input'" class="px-3 py-2">
              <label>{{value.label}}</label>
              <input :placeholder="value.placeholder" :type="value.type" :name="value.name" :class="value.class" :required="value.required" :autocomplete="value.autocomplete" />
            </div>

            <div v-if="value.element === 'textarea'" class="px-3 py-2">
              <label>{{value.label}}</label>
              <textarea :placeholder="value.placeholder" :type="value.type" :name="value.name" :rows="value.rows" :class="value.class" :required="value.required" :autocomplete="value.autocomplete"></textarea>
            </div>

            <div v-if="value.element === 'select'" class="px-3 py-2">
              <label>{{value.text}}</label>
              <select :name="value.name" :class="value.class" :required="value.required">
                <option v-for="(option, optionIndex) in value.options" :key="optionIndex" :value="option.value">{{ option.label }}</option>
              </select>
            </div>

            <div v-if="value.element === 'button'" class="px-3 py-2">
              <button :type="value.type" :class="value.class">{{ value.text }}</button>
            </div>
          </span>
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