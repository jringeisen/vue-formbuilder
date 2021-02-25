<template>
    <div>
      <form action="#" method="POST">
        <div v-if="formJson" class="w-1/2 mx-auto mt-6">
          <span v-for="(value, index) in formJson" :key="index">
            <div v-if="value.input === 'header' && value.type === 'h1'" class="px-3 py-2">
              <h1>{{ value.text }}</h1>
            </div>

            <div v-if="value.input === 'p'" class="px-3 py-2">
              <p :class="value.class">{{ value.textarea }}</p>
            </div>
            
            <div v-if="value.input === 'input'" class="px-3 py-2">
              <label>{{value.label}}</label>
              <input :placeholder="value.placeholder" :type="value.type" :name="value.name" :class="value.class" :required="value.required" :autocomplete="value.autocomplete" />
            </div>

            <div v-if="value.input === 'textarea'" class="px-3 py-2">
              <label>{{value.label}}</label>
              <textarea :placeholder="value.placeholder" :type="value.type" :name="value.name" :rows="value.rows" :class="value.class" :required="value.required" :autocomplete="value.autocomplete"></textarea>
            </div>

            <div v-if="value.input === 'button'" class="px-3 py-2">
              <button :type="value.type" :class="value.class">{{ value.text }}</button>
            </div>
          </span>
        </div>
      </form>
    </div>
</template>

<script>
export default {
  props: ['formJson']
}
</script>