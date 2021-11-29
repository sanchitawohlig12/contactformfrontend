<template>
  <div>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-3"><h1 align="center">Customer</h1></div>
    </div>
    <v-snackbar v-model="snackbar" absolute top right color="success">
      <span>Submit successful!</span>
      <v-icon dark> mdi-checkbox-marked-circle </v-icon>
    </v-snackbar>
    <form ref="form" @submit.prevent="saveCustomer">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-3">
          <div class="form-group">
            <label>First Name:</label>
            <input
              v-model="form.first"
              v-on:keypress="isLetter($event)"
              :rules="rules.name"
              color="blue"
              label="First Name"
              required
              class="form-control"
              name="name"
            />
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label>Middle Name:</label>
            <input
              v-model="form.middle"
              v-on:keypress="isLetter($event)"
              :rules="rules.name"
              color="blue"
              label="Middle Name"
              required
              class="form-control"
            />
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label>Sur Name:</label>
            <input
              v-model="form.sur"
              v-on:keypress="isLetter($event)"
              :rules="rules.name"
              color="blue"
              label="Sur Name"
              required
              class="form-control"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-3">
          <div class="form-group">
            <label>Age:</label>
            <input
              type="text"
              @keypress="onlyNumber"
              v-model="form.age"
              :rules="rules.phone"
              color="blue"
              label="Age"
              maxlength="2"
              class="form-control"
              required
            />
          </div>
        </div>
        <!-- <div class="col-md-1"></div> -->
        <div class="col-md-3">
          <div class="form-group">
            <label>Mobile:</label>
            <input
              type="text"
              @keypress="onlyNumber"
              v-model="form.mobile"
              :rules="rules.phone"
              color="blue"
              label="Phone Number"
              maxlength="10"
              class="form-control"
              required
            />
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label>Gender:</label>
            <!-- <input
              v-model="form.gender"
              v-on:keypress="isLetter($event)"
              :rules="rules.name"
              color="blue"
              label="Gender"
              required
              class="form-control"
            /> -->
            <select
              class="form-control"
              id="sel1"
              v-model="form.gender"
              color="blue"
              label="Gender"
              required
            >
              <option>male</option>
              <option>female</option>
              <option>other</option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-3">
          <div class="form-group">
            <label>Village:</label>
            <input
              v-model="form.village"
              v-on:keypress="isLetter($event)"
              :rules="rules.name"
              color="blue"
              label="Village"
              required
              class="form-control"
            />
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label>Address:</label>
            <input
              v-model="form.address"
              :rules="rules.name"
              color="blue"
              label="address"
              required
              class="form-control"
            />
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label>Blood Group:</label>
            <!-- <input
              v-model="form.bloodGroup"
              :rules="rules.name"
              color="blue"
              label="Blood Group"
              required
              class="form-control"
            /> -->
            <select
              class="form-control"
              id="sel2"
              v-model="form.bloodGroup"
              color="blue"
              label="Blood Group"
              required
            >
              <option>A+</option>
              <option>B+</option>
              <option>A-</option>
              <option>B-</option>
              <option>O+</option>
              <option>O-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
          </div>
        </div>
      </div>

      <br />
      <div class="row">
        <div class="col-md-5"></div>
        <div class="col-md-3">
          <div class="form-group">
            <button
              class="btn btn-success"
              :disabled="!formIsValid"
              text
              color="success"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
    <form ref="form1" @submit.prevent="searchfirstName">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-md-3">
          <div class="form-group">
            <label>First Name:</label>
            <input
              v-model="form.firstName"
              v-on:keypress="isLetter($event)"
              :rules="rules.name"
              color="blue"
              label="First Name"
              required
              class="form-control"
            />
          </div>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-3">
          <div class="form-group">
            <label>Register key</label>
            <input
              v-model="form.key"
              color="blue"
              label="key"
              required
              class="form-control"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-5"></div>
        <div class="col-md-4">
          <div class="form-group">
            <button class="btn btn-success" text color="success" type="submit">
              Search
            </button>
          </div>
        </div>
      </div>
    </form>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Sur Name</th>
          <th>Age</th>
          <th>Mobile</th>
          <th>Gender</th>
          <th>Village</th>
          <th>Address</th>
          <th>Blood Group</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <!-- <tr v-for="post in posts.Info.slice(
            posts.Info.length - 1,
            posts.Info.length
          )"
          :key="post._id"></tr> -->
          <td>{{ this.customers.firstName }}</td>
          <td>{{ this.customers.middleName }}</td>
          <td>{{ this.customers.surName }}</td>
          <td>{{ this.customers.age }}</td>
          <td>{{ this.customers.mobile }}</td>
          <td>{{ this.customers.gender }}</td>
          <td>{{ this.customers.village }}</td>
          <td>{{ this.customers.address }}</td>
          <td>{{ this.customers.bloodGroup }}</td>
        </tr>
        <!-- 
        {{
          this.customers.firstName
        }} -->
      </tbody>
    </table>
  </div>
</template>
<script>
import CustomerService from '../services/CustomerServices'
export default {
  data() {
    const defaultForm = Object.freeze({
      id: null,
      first: '',
      middle: '',
      sur: '',

      age: '',
      mobile: '',
      gender: '',
      village: '',
      address: '',
      bloodGroup: '',
      key: '',
      firstName: '',
    })

    return {
      customers: '',

      form: Object.assign({}, defaultForm),
      rules: {
        name: [(val) => (val || '').length > 0 || 'This field is required'],
        // emailRules: [
        //   (v) => !!v || 'E-mail is required',
        //   (v) => /.+@.+/.test(v) || 'E-mail must be valid',
        // ],
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
        this.form.middle &&
        this.form.sur &&
        this.form.age &&
        this.form.mobile &&
        this.form.gender &&
        this.form.village &&
        this.form.address &&
        this.form.bloodGroup
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

    saveCustomer() {
      this.snackbar = true
      const data = {
        firstName: this.form.first,
        middleName: this.form.middle,
        surName: this.form.sur,
        age: this.form.age,
        mobile: this.form.mobile,
        gender: this.form.gender,
        village: this.form.village,
        address: this.form.address,
        bloodGroup: this.form.bloodGroup,
      }

      CustomerService.create(data)
        .then((response) => {
          this.form.id = response.data.id
          console.log(response.data)
          this.submitted = true
        })
        .catch((e) => {
          console.log(e)
        })

      this.resetForm()
    },
    submit() {},
    // searchTitle() {
    //   TutorialDataService.findByTitle(this.title)
    //     .then(response => {
    //       this.tutorials = response.data;
    //       console.log(response.data);
    //     })
    //     .catch(e => {
    //       console.log(e);
    //     });
    // }
    searchfirstName() {
      const data = {
        firstName: this.form.firstName,
        key: this.form.key,
      }
      CustomerService.findByfirstName(data)

        .then((response) => {
          // console.log(response.data)
          this.customers = response.data
          console.log(this.customers)

          // console.log(response.data)
        })
        .catch((e) => {
          console.log(e)
        })
    },
  },
}
</script>