<template>
  <div class="">
    <!-- WORKPLACE REGISTRATION TEXT AND ADDING NEW WORKPLACE BUTTON  -->
    <div class="flex justify-between mt-5 mb-10">
      <div class="text-2xl text-[#0a58a4] font-bold">Contract Document</div>
      <div class="flex gap-5">
        <a-button
          class="flex items-center py-4 px-2 font-bold bg-[#0a58a4] text-white hover:bg-white"
          @click="showModall"
        >
          Contract Dissolution
        </a-button>
        <a-button
          class="flex items-center py-4 px-6 font-bold bg-[#0a58a4] text-white hover:bg-white"
          @click="showModal"
        >
          New Contract
        </a-button>
      </div>
    </div>
    <!-- WORKPLACE FORM -->
    <a-modal
      v-model:open="open"
      width="1000px"
      title="New Contract Document"
      @ok="handleForm"
      okText="submit"
    >
      <a-form :model="formState">
        <div class="mt-10">
          <div class="flex justify-end">
            <div class="">
              <a-input
                v-model:value="formState.contract_lessor_name"
                :rules="[
                  { required: false, message: 'Please enter lessor name!' },
                ]"
                placeholder="enter lessor name"
                allow-clear
                class="mb-6"
              />
            </div>
          </div>
          <div class="grid grid-cols-3">
            <div class="">
              <label for="" class="text-gray-500"
                >select the contract makeing body</label
              >
              <div class="mt-2">
                <a-form-item>
                  <a-select
                    placeholder="Please select enterprise name"
                    v-model:value="formState.contract_lessor_name"
                    :rules="[
                      { required: false, message: 'Please enter lessor name!' },
                    ]"
                  >
                    <a-select-option value="condominium"
                      >Condominium</a-select-option
                    >
                    <a-select-option value="shade">Shade</a-select-option>
                    <a-select-option value="container"
                      >Container</a-select-option
                    >
                  </a-select>
                </a-form-item>
              </div>
            </div>
            <div class=""></div>
            <div class="">
              <div class="">
                <label for="" class="text-gray-500">selete enterprise</label>
                <a-form-item>
                  <a-select
                    placeholder="Please select enterprise name"
                    v-model:value="formState.contract_enterprise_name"
                    :rules="[
                      {
                        required: false,
                        message: 'Please select enterprise name!',
                      },
                    ]"
                  >
                    <a-select-option value="condominium"
                      >Condominium</a-select-option
                    >
                    <a-select-option value="shade">Shade</a-select-option>
                    <a-select-option value="container"
                      >Container</a-select-option
                    >
                  </a-select>
                </a-form-item>
              </div>
              <div class="">
                <label for="" class="text-gray-500">select manager name</label>
                <a-form-item>
                  <a-select
                    class="mt-2"
                    placeholder="Please select enterprise manager name"
                    v-model:value="formState.contract_enterprise_managername"
                    :rules="[
                      {
                        required: false,
                        message: 'Please select manager name!',
                      },
                    ]"
                  >
                    <a-select-option value="condominium"
                      >Condominium</a-select-option
                    >
                    <a-select-option value="shade">Shade</a-select-option>
                    <a-select-option value="container"
                      >Container</a-select-option
                    >
                  </a-select>
                </a-form-item>
              </div>
            </div>
          </div>
          <!-- divider -->
          <div class="mr-4">
            <a-divider
              style="background: gray; margin-left: 2px; margin-right: 40px"
            />
          </div>
          <div class="">
            <div class="flex justify-center text-2xl font-bold text-gray-600">
              workplace management agreement
            </div>
            <div class="text-xl">Rule</div>
            <div class="text-lg mt-3">
              <p>
                1, Based on the hire agreement given kare meter
                <a-input
                  class="w-36 ml-1"
                  v-model:value="formState.contract_lessor_name"
                  :rules="[
                    { required: false, message: 'Please enter lessor name!' },
                  ]"
                  placeholder="enter kare meter"
                  allow-clear
                />
                and the hired unique code is
                <a-input
                  class="w-32 ml-1"
                  v-model:value="formState.contract_lessor_name"
                  :rules="[
                    { required: false, message: 'Please enter lessor name!' },
                  ]"
                  placeholder="unique code"
                  allow-clear
                />
                .
              </p>
              <p class="mt-2">
                2, One kare meter have hire value is
                <a-input
                  class="w-36 ml-1"
                  v-model:value="formState.contract_lessor_name"
                  :rules="[
                    { required: false, message: 'Please enter lessor name!' },
                  ]"
                  placeholder="1 kare meter"
                  allow-clear
                />
                so the enterprise must pay
                <a-input
                  class="w-24 ml-1"
                  v-model:value="formState.contract_lessor_name"
                  :rules="[
                    { required: false, message: 'Please enter lessor name!' },
                  ]"
                  placeholder="birr"
                  allow-clear
                />
                in month and pay
                <a-input
                  class="w-24 ml-1"
                  v-model:value="formState.contract_lessor_name"
                  :rules="[
                    { required: false, message: 'Please enter lessor name!' },
                  ]"
                  placeholder="birr"
                  allow-clear
                />
                birr in year.
              </p>
              <p>
                3, The hire must update the contract or the agreement in
                <a-input
                  class="w-24 ml-1"
                  v-model:value="formState.contract_lessor_name"
                  :rules="[
                    { required: false, message: 'Please enter lessor name!' },
                  ]"
                  placeholder="birr"
                  allow-clear
                />
                E.C .
              </p>
              <p>
                4,The hire workplace havev the authority to dissoulution based
                on the rule statted in.
              </p>
            </div>
          </div>

          <div
            class="mt-16 text-lg text-gray-600 border-2 border-[#0a58a4] py-5 px-2"
          >
            <p>
              In
              <a-input
                class="w-40 ml-1"
                v-model:value="formState.workplace_contract_office_name"
                :rules="[
                  { required: false, message: 'Please enter office name!' },
                ]"
                placeholder="enter office name"
                allow-clear
              />
              in city
              <a-input
                class="w-40 ml-1"
                v-model:value="formState.workplace_contract_office_name"
                :rules="[
                  { required: false, message: 'Please enter office name!' },
                ]"
                placeholder="enter office name"
                allow-clear
              />
              in subcity
              <a-input
                class="w-40 ml-1"
                v-model:value="formState.workplace_contract_office_name"
                :rules="[
                  { required: false, message: 'Please enter office name!' },
                ]"
                placeholder="enter office name"
                allow-clear
              />
              and woreda<a-input
                class="w-40 ml-1"
                v-model:value="formState.workplace_contract_office_name"
                :rules="[
                  { required: false, message: 'Please enter office name!' },
                ]"
                placeholder="enter office name"
                allow-clear
              />
            </p>
            <p class="mt-4">
              have workplace name
              <a-input
                class="w-40 ml-1"
                v-model:value="formState.workplace_contract_office_name"
                :rules="[
                  { required: false, message: 'Please enter office name!' },
                ]"
                placeholder="enter office name"
                allow-clear
              />
              and workplace type is:
              <a-input
                class="w-40 ml-1"
                v-model:value="formState.workplace_contract_office_name"
                :rules="[
                  { required: false, message: 'Please enter office name!' },
                ]"
                placeholder="enter office name"
                allow-clear
              />
              and workplace number
            </p>
            <p class="mt-4">
              <a-input
                class="w-40 ml-1"
                v-model:value="formState.workplace_contract_office_name"
                :rules="[
                  { required: false, message: 'Please enter office name!' },
                ]"
                placeholder="enter office name"
                allow-clear
              />
              and take workplace size in meter square
              <a-input
                class="w-40 ml-1"
                v-model:value="formState.workplace_contract_office_name"
                :rules="[
                  { required: false, message: 'Please enter office name!' },
                ]"
                placeholder="enter office name"
                allow-clear
              />
              .
            </p>
          </div>

          <div class="mt-10">
            <a-divider
              style="background: gray; margin-left: 2px; margin-right: 40px"
            />
          </div>

          <div class="grid grid-cols-4">
            <div class="col-start-3">
              <p class="font-semibold">lessor signature</p>
              <p class="mt-2">Upload video</p>
            </div>
            <div class="">
              <p class="font-semibold">enterprise manager signature</p>
              <p class="mt-2">Upload video</p>
            </div>
          </div>

          <div class="mt-5">
            <button class="bg-[#1677ff] text-white rounded px-4 py-2">
              upload contract document
            </button>
          </div>
        </div>
      </a-form>
    </a-modal>

    <a-modal
      v-model:openn="openn"
      width="1000px"
      title="New Contract Document"
      @ok="handleForm"
      okText="submit"
    >
      <a-form :model="formStatee">
        <div class="mt-10">
          hwllo
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

const openn = ref(false);
const showModall = () => {
  openn.value = true;
};

const formState = reactive({
  contract_lessor_name: "",
  contract_enterprise_name: "",
  contract_enterprise_managername: "",
  workplace_contract_office_name: "",
});
</script>
