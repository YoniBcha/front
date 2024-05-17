Nati Class, [5/16/2024 4:13 PM]
<template>
  <div class="">
    <!-- WORKPLACE REGISTRATION TEXT AND ADDING NEW WORKPLACE BUTTON  -->
    <div class="flex justify-between mt-5 mb-10">
      <div class="text-2xl text-[#0a58a4] font-bold">
        Workplace Registration
      </div>
      <a-button
        class="flex items-center py-4 px-6 font-bold bg-[#0a58a4] text-white hover:bg-white"
        @click="showModal"
      >
        New Workplace
      </a-button>
    </div>
    <!-- WORKPLACE FORM -->
    <a-modal
      v-model:open="open"
      width="1000px"
      title="New Workplace"
      @ok="handleForm"
      okText="submit"
    >
      <a-form :model="formState">
        <div class="grid grid-cols-3 grid-rows-3 gap-4">
          <div class="col-span-1 row-span-3">
            <a-form-item>
              <a-upload-dragger
                v-model:fileList="formState.workplace_photo"
                name="photo"
                action="/upload.do"
                :rules="[
                  {
                    required: false,
                    message: 'Please upload workplace photo',
                  },
                ]"
              >
                <p class="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p class="ant-upload-text">Click or drag workplace photo</p>
                <p class="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </a-upload-dragger>
            </a-form-item>
          </div>
          <div class="col-span-1 row-span-3">
            <div class="">
              <a-input
                v-model:value="formState.workplace_name"
                :rules="[
                  { required: false, message: 'Please input workplace name!' },
                ]"
                placeholder="enter workplace name"
                allow-clear
                class="mb-6"
              />
            </div>
            <div class="">
              <a-form-item>
                <a-select
                  v-model:value="formState.workplace_city"
                  :rules="[
                    {
                      required: false,
                      message: 'Please select workplace city!',
                    },
                  ]"
                  placeholder="Please select workplace city"
                >
                  <a-select-option value="condominium"
                    >Condominium</a-select-option
                  >
                  <a-select-option value="shade">Shade</a-select-option>
                  <a-select-option value="container">Container</a-select-option>
                </a-select>
              </a-form-item>
            </div>
            <div class="">
              <a-form-item>
                <a-select
                  v-model:value="formState.workplace_subcity"
                  :rules="[
                    {
                      required: false,
                      message: 'Please select workplace subcity!',
                    },
                  ]"
                  placeholder="Please select workplace subcity"
                >
                  <a-select-option value="condominium"
                    >Condominium</a-select-option
                  >
                  <a-select-option value="shade">Shade</a-select-option>
                  <a-select-option value="container">Container</a-select-option>
                </a-select>
              </a-form-item>
            </div>
          </div>
          <div class="col-span-1 row-span-3">
            <div class="">
              <a-form-item>
                <a-select
                  v-model:value="formState.workplace_type"
                  :rules="[
                    {
                      required: false,
                      message: 'Please select workplace type!',
                    },
                  ]"
                  placeholder="Please select workplace type"
                >
                  <a-select-option value="condominium"
                    >Condominium</a-select-option
                  >

                  <a-select-option value="shade">Shade</a-select-option>
                  <a-select-option value="container">Container</a-select-option>
                </a-select>
              </a-form-item>
            </div>
            <div class="">
              <a-form-item>
                <a-select
                  v-model:value="formState.workplace_woreda"
                  :rules="[
                    {
                      required: false,
                      message: 'Please select workplace woreda!',
                    },
                  ]"
                  placeholder="Please select workplace woreda"
                >
                  <a-select-option value="condominium"
                    >Condominium</a-select-option
                  >
                </a-select>
              </a-form-item>
            </div>
            <div class="">
              <a-form-item>
                <a-select
                  v-model:value="formState.workplace_kebele"
                  :rules="[
                    {
                      required: false,
                      message: 'Please select workplace kebele!',
                    },
                  ]"
                  placeholder="Please select workplace kebele"
                >
                  <a-select-option value="condominium"
                    >Condominium</a-select-option
                  >
                  <a-select-option value="shade">Shade</a-select-option>
                  <a-select-option value="container">Container</a-select-option>
                </a-select>
              </a-form-item>
            </div>
          </div>
        </div>

        <!-- if workplace type iscondominium  -->
        <div class="">
          <div class="">If Workplace Type is Condominium</div>
          <div class="grid grid-cols-3 gap-2">
            <a-input
              v-model:value="formState.condominium_amount"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="number of condominium"
              allow-clear
              class="mb-6"
            />
            <a-input
              v-model:value="formState.numberof_block_ineach_condominium"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="number block in each condominium"
              allow-clear
              class="mb-6"
            />
            <a-input
              v-model:value="formState.numberof_block_size"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="enter block size (area)"
              allow-clear
              class="mb-6"
            />
          </div>

          <div class="grid grid-cols-2">
            <a-input
              v-show="formState.condominium_amount === '1'"
              v-model:value="formState.condominium_number_one"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="enter the number of condominium one"
              allow-clear
              class="mb-6"
            />
          </div>

          <div class="grid grid-cols-3 gap-3">
            <a-input
              v-show="formState.condominium_amount === '2'"
              v-model:value="formState.condominium_number_one"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="enter the number of condominium one"
              allow-clear
              class="mb-6"
            />
            <a-input
              v-show="formState.condominium_amount === '2'"
              v-model:value="formState.condominium_number_two"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="enter the number of condominium two"
              allow-clear
              class="mb-6"
            />
          </div>

          <div class="grid grid-cols-3 gap-3">
            <a-input
              v-show="formState.condominium_amount === '3'"
              v-model:value="formState.condominium_number_one"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="enter the number of condominium one"
              allow-clear
              class="mb-6"
            />
            <a-input
              v-show="formState.condominium_amount === '3'"
              v-model:value="formState.condominium_number_two"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="enter the number of condominium two"
              allow-clear
              class="mb-6"
            />
            <a-input
              v-show="formState.condominium_amount === '3'"
              v-model:value="formState.condominium_number_three"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="enter the number of condominium three"
              allow-clear
              class="mb-6"
            />
          </div>

          <div class="grid grid-cols-4 gap-3">
            <a-input
              v-show="formState.condominium_amount === '4'"
              v-model:value="formState.condominium_number_one"
              :rules="[
                {
                  required: false,
                  message: 'Please enter number of condominium one!',
                },
              ]"
              placeholder="number of condominium one"
              allow-clear
              class="mb-6"
            />
            <a-input
              v-show="formState.condominium_amount === '4'"
              v-model:value="formState.condominium_number_two"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="number of condominium two"
              allow-clear
              class="mb-6"
            />
            <a-input
              v-show="formState.condominium_amount === '4'"
              v-model:value="formState.condominium_number_three"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="number of condominium three"
              allow-clear
              class="mb-6"
            />
            <a-input
              v-show="formState.condominium_amount === '4'"
              v-model:value="formState.condominium_number_four"
              :rules="[
                { required: false, message: 'Please input workplace name!' },
              ]"
              placeholder="number of condominium four"
              allow-clear
              class="mb-6"
            />
          </div>
        </div>

        <!-- if workplace type is container -->
        <div class="">
          <div>if workplace type is container</div>
          <div class="grid grid-cols-2 gap-3">
            <div class="">
              <a-form-item
                name="name"
                :rules="[
                  { required: true, message: 'Please container number!' },
                ]"
              >
                <a-input
                  v-model:value="formState.workplace_container_number"
                  placeholder="enter container number"
                />
              </a-form-item>
            </div>
            <div class="">
              <a-form-item
                name="name"
                :rules="[
                  { required: true, message: 'Please enter container size!' },
                ]"
              >
                <a-input
                  v-model:value="formState.workplace_container_size"
                  placeholder="enter container size"
                />
              </a-form-item>
            </div>
          </div>
        </div>
        <!-- if workplace type is shade -->
        <div class="">
          <div>if workplace type is shade</div>
          <div class="grid grid-cols-2 gap-3">
            <div class="">
              <a-form-item
                name="name"
                :rules="[
                  {
                    required: true,
                    message: 'Please enter workplace shade number!',
                  },
                ]"
              >
                <a-input
                  v-model:value="formState.workplace_shade_number"
                  placeholder="enter shade number"
                />
              </a-form-item>
            </div>
            <div class="">
              <a-form-item
                name="name"
                :rules="[{ required: true, message: 'Please shade size!' }]"
              >
                <a-input
                  v-model:value="formState.workplace_shade_size"
                  placeholder="enter shade size"
                />
              </a-form-item>
            </div>
          </div>
        </div>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup>
const open = ref(false);
const showModal = () => {
  open.value = true;
};

const formState = reactive({
  workplace_photo: null,
  workplace_city: "",
  workplace_subcity: "",
  workplace_woreda: "",
  workplace_type: "",
  workplace_condominium_amount: "",
  workplace_condominium_number_one: "",
  workplace_condominium_number_two: "",
  workplace_condominium_number_three: "",
  workplace_condominium_number_four: "",
  workplace_numberof_block_ineach_condominium: "",
  workplace_container_size: "",
  workplace_container_number: "",
  workplace_shade_number: "",
  workplace_shade_size: "",
});
</script>
