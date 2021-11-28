<template>
  <div class="container" style="" align="center">
    <div class="head">
      <h1 align="center">GET IN TOUCH</h1>
    </div>
    <div class="main" align="center" style="width: 100%">
      <v-card flat>
        <v-snackbar v-model="snackbar" absolute top right color="success">
          <span>Submit successful!</span>
          <v-icon dark> mdi-checkbox-marked-circle </v-icon>
        </v-snackbar>
        <v-form ref="form" @submit.prevent="submit">
          <v-container align="center">
            <v-row class="container">
              <v-col cols="12" md="3"></v-col>
              <v-col cols="12" md="2" sm="6">
                <v-text-field
                  v-model="form.first"
                  v-on:keypress="isLetter($event)"
                  :rules="rules.name"
                  color="blue"
                  label="First Name"
                  required
                >
                  <template #prepend>
                    <!-- <v-icon color="pink" right>mdi-account-circle </v-icon> -->
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="6">
                <v-text-field
                  v-model="form.first"
                  v-on:keypress="isLetter($event)"
                  :rules="rules.name"
                  color="blue"
                  label="Middle Name"
                  required
                >
                  <template #prepend>
                    <!-- <v-icon color="pink" right>mdi-account-circle </v-icon> -->
                  </template>
                </v-text-field>
              </v-col>
              <v-col cols="12" md="2" sm="6">
                <v-text-field
                  v-model="form.first"
                  v-on:keypress="isLetter($event)"
                  :rules="rules.name"
                  color="blue"
                  label="Sur Name"
                  required
                >
                  <template #prepend>
                    <!-- <v-icon color="pink" right>mdi-account-circle </v-icon> -->
                  </template>
                </v-text-field>
              </v-col>
            </v-row>
            <v-col cols="12" md="8" sm="6">
              <v-text-field
                v-model="form.email"
                :rules="rules.emailRules"
                color="blue"
                label="E-mail"
                required
                ><template #prepend>
                  <!-- <v-icon color="pink" right>mdi-email </v-icon> -->
                </template>
              </v-text-field>
            </v-col>

            <v-col cols="12" md="8" sm="6">
              <v-text-field
                v-model="form.subject"
                v-on:keypress="isLetter($event)"
                :rules="rules.name"
                color="blue"
                label="Subject"
                required
                ><template #prepend>
                  <!-- <v-icon color="pink" right>mdi-lead-pencil </v-icon> -->
                </template></v-text-field
              >
            </v-col>
            <v-col cols="12" md="8" sm="6">
              <v-text-field
                type="text"
                @keypress="onlyNumber"
                v-model="form.phone"
                :rules="rules.phone"
                color="blue"
                label="Phone Number"
                maxlength="10"
                required
                ><template #prepend>
                  <!-- <v-icon color="pink" right>mdi-phone </v-icon> -->
                </template></v-text-field
              >
            </v-col>

            <v-col cols="12" md="8" sm="6">
              <v-textarea solo name="input-7-4" label="Your Message">
                <template #prepend>
                  <!-- <v-icon color="pink" right>mdi-message-text </v-icon> -->
                </template></v-textarea
              >
            </v-col>

            <!-- <v-col cols="12" md="8" sm="12">
              <v-checkbox v-model="form.terms" color="green">
                <template v-slot:label>
                  <div @click.stop="">
                    Do you agree
                    <a href="#" @click.prevent="terms = true"></a>

                    <a href="#" @click.prevent="conditions = true"></a>
                  </div>
                </template>
              </v-checkbox>
            </v-col> -->
          </v-container>
          <div class="container" style="width: 50%" align="center">
            <v-card-actions>
              <v-btn text @click="resetForm"> Cancel </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!formIsValid"
                text
                color="primary"
                type="submit"
              >
                Submit
              </v-btn>
            </v-card-actions>
          </div>
        </v-form>
      </v-card>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const defaultForm = Object.freeze({
      first: '',
      email: '',
      subject: '',
      phone: '',
    })

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        name: [(val) => (val || '').length > 0 || 'This field is required'],
        emailRules: [
          (v) => !!v || 'E-mail is required',
          (v) => /.+@.+/.test(v) || 'E-mail must be valid',
        ],
        phone: [
          (v1) => !!v1 || 'Phone number is required',
          (v1) => /\d{10}/.test(v1) || 'Please enter correct mobile number',
          (v1) =>
            (v1 && v1.length === 10) || 'Please enter correct mobile number',
        ],
      },

      snackbar: false,

      defaultForm,
    }
  },

  computed: {
    formIsValid() {
      return (
        this.form.first &&
        this.form.email &&
        this.form.subject &&
        this.form.phone
      )
    },
  },

  methods: {
    isLetter(e) {
      const char = String.fromCharCode(e.keyCode) // Get the character
      if (/^[A-Za-z]+$/.test(char)) return true
      // Match with regex
      else e.preventDefault() // If not match, don't add to input text
    },
    onlyNumber($event) {
      const keyCode = $event.keyCode ? $event.keyCode : $event.which
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault()
      }
    },
    resetForm() {
      this.form = Object.assign({}, this.defaultForm)
      this.$refs.form.reset()
    },
    submit() {
      this.snackbar = true
      this.resetForm()
    },
  },
}
</script>