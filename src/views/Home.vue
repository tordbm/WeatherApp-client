<template>
  <div class="row align-items-md-stretch">
    <div class="col-md-6 mb-4">
      <div class="p-5 box border rounded-3">
        <label for="inputCity" class="form-label">Enter a City</label>
        <input v-model=city type="input" id="inputCity" class="form-control" :disabled="loading">
        <button type="button" class="btn btn-outline-success mt-2" @click="fetchData(url)">Submit</button>
      </div>
    </div>
    <div class="col-md-6 mb-4">
      <div class="p-5 box border rounded-3">
        <div v-if="loading" class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  components: {
    
  },
  data() {
    return {
      weatherData: null as any,
      loading: false as boolean,
      city: null as string | null,
    }
  },
  computed: {
    url(): string {
      if (this.city !== null){
        return "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"+this.city+"?unitGroup=metric&key=XL48RQQY7M84CDS92HV6S5TW5&contentType=json"
      }
      return ''
    }
  },
  methods: {
    async fetchData(url: string):Promise<any> {
      if (this.city === null || url === ''){
        return
      }
      this.loading = true
      fetch(url, {
      "method": "GET",
      "headers": {
      }
      })
      .then(resp => resp.json())
      .then(data => {
        this.weatherData = data
        this.loading = false
       })
      .catch(err => { console.log(err) });
    }
  }
}

</script>

<style lang="scss" scoped>
#infoModalLabel { color: var(--bs-body-color); }
</style>