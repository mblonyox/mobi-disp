<template>
  <div id="rekam">
    <h2>Rekam Surat Masuk</h2>
    <v-stepper v-model="step">
      <v-stepper-header>
        <v-stepper-step step="1" :complete="step > 1">Unggah surat</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2" :complete="step > 2">Lengkapi data</v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3">Cetak lembar disposisi</v-stepper-step>
      </v-stepper-header>
      <v-stepper-content step="1">
        <v-card>
          <v-card-text>
            <p class="text-xs-center">Pilih file gambar hasil pindaian (
              <i>scan</i> ) atau kamera.</p>
            <v-text-field name="picture" type="file" accept="image/*" @change.native="uploadImage" v-show="!uploadStatus"></v-text-field>
            <v-progress-linear v-if="uploadStatus" v-model="uploadStatus.percent"></v-progress-linear>
          </v-card-text>
        </v-card>
      </v-stepper-content>
      <v-stepper-content step="2">
        <v-card>
          <v-card-text>
            <v-layout row wrap>
              <v-flex xs12 md8>
                <v-text-field name="nomor" label="Nomor Surat" v-model="surat.nomor" prepend-icon="mail"></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-dialog persistent v-model="datepicker" lazy>
                  <v-text-field slot="activator" label="Tanggal Surat" v-model="surat.tanggal" prepend-icon="event" readonly></v-text-field>
                  <v-date-picker v-model="surat.tanggal" scrollable>
                    <template scope="{ save, cancel }">
                      <v-card-row actions>
                        <v-btn flat primary @click.native="cancel()">Batal</v-btn>
                        <v-btn flat primary @click.native="save()">Simpan</v-btn>
                      </v-card-row>
                    </template>
                  </v-date-picker>
                </v-dialog>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-text-field name="pengirim" label="Pengirim Surat" v-model="surat.pengirim" prepend-icon="domain"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row wrap>
              <v-flex xs12 md4>
                <v-select label="Sifat Surat" v-model="surat.sifat" :items="sifats" item-value="value" prepend-icon="schedule"></v-select>
              </v-flex>
              <v-flex xs12 md4>
                <v-select label="Status Surat" v-model="surat.status" :items="status" item-value="value" prepend-icon="stars"></v-select>
              </v-flex>
              <v-flex xs12 md4>
                <v-select label="Jenis Surat" v-model="surat.jenis" :items="jenis" item-value="value" prepend-icon="description"></v-select>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs12>
                <v-text-field name="perihal" label="Perihal Surat" v-model="surat.perihal" prepend-icon="subject" multi-line></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex xs6 md4 offset-md2>
                <v-btn round block light class="green" @click.native="saveSurat">Simpan</v-btn>
              </v-flex>
              <v-flex xs6 md4>
                <v-btn round block light class="red">Batal</v-btn>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-stepper-content>
      <v-stepper-content step="3">
      </v-stepper-content>
    </v-stepper>
  </div>
</template>

<script>
import { database, storage } from '@/services/firebase'

export default {
  data: () => ({
    step: 1,
    uploadStatus: null,
    datepicker: false,
    key: null,
    surat: {
      image: null,
      nomor: '',
      tanggal: '',
      pengirim: '',
      sifat: 'biasa',
      status: 'asli',
      jenis: 'biasa',
      perihal: ''
    }
  }),
  firebase: () => ({
    surats: database.ref('/surats'),
    sifats: database.ref('/metafields/sifats'),
    status: database.ref('/metafields/status'),
    jenis: database.ref('/metafields/jenis')
  }),
  methods: {
    uploadImage: function (e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      let file = files[0];
      this.key = this.$firebaseRefs.surats.push().key;
      let uploadTask = storage.ref().child('/surats/' + this.key + '/' + file.name).put(file);
      uploadTask.on('state_changed',
        (snapshot) => {
          this.uploadStatus = { state: 'Mengunggah', percent: 0 };
          switch (snapshot.state) {
            case 'paused':
              this.uploadStatus.state = "Jeda"
              this.uploadStatus.percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              break;
            case 'running':
              this.uploadStatus.state = "Berjalan"
              this.uploadStatus.percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          }
        }, (error) => {
          console.log(error)
        }, () => {
          this.surat.image = uploadTask.snapshot.downloadURL;
          this.step = 2;
        }
      )
    },
    saveSurat: function() {
      this.$firebaseRefs.surats.child(this.key).set(this.surat)
      this.step = 3
    }
  }
}
</script>
