<template>
  <div>
    <b-modal
      ref="confirmCollection"
      :title="`Confirmation (Total of ${signedArray.length} transactions)`"
      hide-footer
      centered
      class="bootstrap-modal-wide confirmation-modal nopadding"
    >
      <div class="modal-content">
        <div class="network-info-container">
          <p>
            <span>{{ $t('interface.network') }}</span>
            {{ network.type.name }} by {{ network.service }}
          </p>
          <div><div class="line" /></div>
          <p>
            <span>{{ $t('confirmation.txTotal') }}:</span> {{ txTotal }}
            {{ network.type.name }}
          </p>
        </div>
        <div class="modal-content-body">
          <div
            v-for="(item, idx) in signedArray"
            :key="item.tx.to + idx + item.tx.value"
            class="item"
          >
            <div v-b-toggle.prevent="`accordion${idx}`" class="header">
              <div class="header-item">
                <img
                  :src="
                    require(`@/assets/images/currency/${network.type.name.toLowerCase()}.svg`)
                  "
                />
                <div>
                  <p>
                    - {{ web3.utils.hexToNumberString(item.tx.value) }}
                    <span>{{ network.type.name }}</span>
                  </p>
                  <div>
                    <span>{{ $t('common.from') }}</span>
                    {{ wallet.getChecksumAddressString() | concatAddr }}
                  </div>
                </div>
              </div>
              <div
                v-show="item.tx.to !== '' && item.tx.to !== undefined"
                class="direction"
              >
                <img src="~@/assets/images/icons/right-arrow.svg" />
              </div>
              <div class="header-item">
                <img
                  :src="
                    require(`@/assets/images/currency/${network.type.name.toLowerCase()}.svg`)
                  "
                />
                <div>
                  <p>
                    + {{ web3.utils.hexToNumberString(item.tx.value) }}
                    <span>{{ network.type.name }}</span>
                  </p>
                  <div>
                    <span>{{ $t('common.to') }}</span>
                    {{ item.tx.to | concatAddr }}
                  </div>
                </div>
              </div>
              <div class="trigger-container">
                <i class="fa fa-lg fa-angle-up" />
                <i class="fa fa-lg fa-angle-down" />
              </div>
            </div>
            <b-collapse :id="`accordion${idx}`" class="body">
              <div class="body-item">
                <span class="item-title">{{ $t('common.gasLimit') }}t</span>
                <span>{{ web3.utils.hexToNumberString(item.tx.gas) }}</span>
              </div>
              <div class="body-item">
                <span class="item-title">{{ $t('common.gasPrice') }}</span>
                <span
                  >{{
                    web3.utils.hexToNumberString(
                      web3.utils.fromWei(item.tx.gasPrice, 'gwei')
                    )
                  }}
                  Gwei</span
                >
              </div>
              <div class="body-item">
                <span class="item-title">Nonce </span>
                <span>{{ web3.utils.hexToNumberString(item.tx.nonce) }}</span>
              </div>
              <div class="body-item">
                <span class="item-title">{{ $t('common.data') }} </span>
                <span class="data-string">{{ item.tx.input }}</span>
              </div>
            </b-collapse>
          </div>
        </div>
      </div>
      <div class="submit-button-container">
        <div class="flex-center-align">
          <div class="button-with-helper">
            <div
              ref="ConfirmAndSendButton"
              :class="[
                allSigned ? '' : 'disabled',
                'submit-button large-round-button-green-filled clickable'
              ]"
              @click="sendBatchTransactions"
            >
              {{ $t('common.confirmAndSend') }}
            </div>
            <div class="tooltip-box-2">
              <b-btn id="exPopover9">
                <img class="icon" src="~@/assets/images/icons/qr-code.svg" />
              </b-btn>
              <b-popover
                target="exPopover9"
                triggers="hover focus"
                placement="top"
              >
                <div class="qrcode-contents">
                  <p class="qrcode-title">
                    {{ $t('confirmation.scanQrCode') }}
                  </p>
                  <div class="qrcode-block">
                    <qrcode :options="{ size: 100 }" value="Hello, World!" />
                  </div>
                  <p class="qrcode-helper">What is that?</p>
                </div>
              </b-popover>
            </div>
          </div>
        </div>
        <p class="learn-more">Have any issues? <a href="/">Learn more</a></p>
      </div>
    </b-modal>
  </div>
</template>
<script>
import AddressBlock from '../AddressBlock';
import { mapGetters } from 'vuex';

export default {
  components: {
    'address-block': AddressBlock
  },
  props: {
    signedArray: {
      type: Array,
      default: () => []
    },
    sendBatchTransactions: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    ...mapGetters({
      web3: 'web3',
      network: 'network',
      wallet: 'wallet'
    }),
    allSigned() {
      for (let i = 0; i < this.signedArray.length; i++) {
        if (
          this.signedArray[i].rawTransaction === '' ||
          this.signedArray[i].rawTransaction === undefined
        )
          return false;
      }
      return true;
    },
    txTotal() {
      if (this.signedArray.length > 0) {
        const BN = this.web3.utils.BN;
        let totalGas = new BN();
        this.signedArray.forEach(item => {
          totalGas = totalGas.add(
            new BN(item.tx.gasPrice.replace('0x', ''), 'hex').mul(
              new BN(item.tx.gas.replace('0x', ''), 'hex')
            )
          );
        });
        return this.web3.utils.fromWei(totalGas.toString(), 'ether').toString();
      }
      return 0;
    }
  }
};
</script>
<style lang="scss" scoped>
@import 'ConfirmCollectionModal.scss';
</style>