import {
  LitElement,
  html,
  css
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";


class SwegonCasaCard extends LitElement {
  static get properties() {
    return {
      hass: {},
      config: {}
    };
  }

  render() {
    return html `
    <ha-card>
    <svg version="1.1" viewBox="0 0 850 500" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <linearGradient id="redblue">
                	<stop stop-color="#acc0e5" offset="0"/>
                    <stop stop-color="#fd7c7a" offset="1"/>
                </linearGradient>
                <path id="fan" d="M12,11A1,1 0 0,0 11,12A1,1 0 0,0 12,13A1,1 0 0,0 13,12A1,1 0 0,0 12,11M12.5,2C17,2 17.11,5.57 14.75,6.75C13.76,7.24 13.32,8.29 13.13,9.22C13.61,9.42 14.03,9.73 14.35,10.13C18.05,8.13 22.03,8.92 22.03,12.5C22.03,17 18.46,17.1 17.28,14.73C16.78,13.74 15.72,13.3 14.79,13.11C14.59,13.59 14.28,14 13.88,14.34C15.87,18.03 15.08,22 11.5,22C7,22 6.91,18.42 9.27,17.24C10.25,16.75 10.69,15.71 10.89,14.79C10.4,14.59 9.97,14.27 9.65,13.87C5.96,15.85 2,15.07 2,11.5C2,7 5.56,6.89 6.74,9.26C7.24,10.25 8.29,10.68 9.22,10.87C9.41,10.39 9.73,9.97 10.14,9.65C8.15,5.96 8.94,2 12.5,2Z">
                <path id="speed" d="M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5A8,8 0 0,0 4,13C4,15.21 4.89,17.21 6.34,18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.32,20.45 4.93,20.07V20.07C3.12,18.26 2,15.76 2,13A10,10 0 0,1 12,3M22,13C22,15.76 20.88,18.26 19.07,20.07V20.07C18.68,20.45 18.05,20.45 17.66,20.06C17.27,19.67 17.27,19.04 17.66,18.65V18.65C19.11,17.2 20,15.21 20,13C20,12 19.81,11 19.46,10.1L20.67,8C21.5,9.5 22,11.18 22,13Z">
                <path id="arrow" d="m20 39.051h38.019v7.0848l14.228-14.228-14.228-14.228v7.0848h-38.019z"/>
                <path id="thermometer" d="M15 13V5A3 3 0 0 0 9 5V13A5 5 0 1 0 15 13M12 4A1 1 0 0 1 13 5V8H11V5A1 1 0 0 1 12 4Z" />
            </defs>
            <g class="container">
            <g class="bg">
            <g transform="translate(-.0029998 -30.999)">
                <path d="m2.348 64.937h167.97l509.83 202.06 156.51 0.34732-0.29513 59.47-167.59 0.2448-510.45-202.92h-155.97z" fill="url(#redblue)" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
                <path d="m2.348 327.06h167.97l509.83-202.06 156.51-0.34732-0.29513-59.47-167.59-0.2448-510.45 202.92h-155.97z" fill="url(#redblue)" stroke="#000" stroke-linejoin="round" stroke-width="2"/>
                <g transform="translate(0,62)" fill="#fff">
                    <use xlink:href='#arrow'/>
                    <use transform="translate(840,0) scale(-1,1)" xlink:href='#arrow'/>
                    <use transform="translate(750,203)" xlink:href='#arrow'/>
                    <use transform="translate(91,203) scale(-1,1)" xlink:href='#arrow'/>
                </g>
            </g>
            </g>
            <g class="col-main" transform="translate(425,75)">
              <use class="icon" xlink:href='#thermometer'/>
              <text>${this.hass.states[this.config.entity].attributes.temperature}°C</text>
            </g>
            <g class="col-out" transform="translate(5,0)">
              <g transform="translate(0,5)">
              <text x="0" y="20">${this.hass.states['sensor.swegon_external_fresh_air_temperature'].state}°C</text>
              </g>
              <g transform="translate(0,100)">
                <use class="icon" xlink:href='#speed'/>
              <text x="30" y="20">${Math.trunc(this.hass.states['sensor.swegon_supply_fan_rpm'].state)} rpm</text>
              </g>
              <g transform="translate(0,210)">
              <text x="0" y="20">${this.hass.states['sensor.swegon_exhaust_air_temperature'].state}°C</text>
              </g>
               <g transform="translate(0,300)">
                <use class="icon" xlink:href='#speed'/>
              <text x="30" y="20">${Math.trunc(this.hass.states['sensor.swegon_extract_fan_rpm'].state)} rpm</text>
              </g>
            </g>
            <g class="col-in" transform="translate(730,0)">
              <g transform="translate(0,5)">
              <text x="90" y="20">${this.hass.states['sensor.swegon_extract_air_temp'].state}°C</text>
              </g>
              <g transform="translate(0,100)">
                <use class="spin icon" xlink:href='#fan'/>
              <text x="100" y="20">${Math.trunc(this.hass.states['sensor.swegon_exhaust_fan_control'].state)}%</text>
              </g>
              <g transform="translate(0,230)">
              <text x="90" y="0">${this.hass.states['sensor.swegon_supply_air_temp'].state}°C</text>
              </g>
              <g transform="translate(0,300)">
                <use class="spin icon" xlink:href='#fan'/>
                <text x="100" y="20">${Math.trunc(this.hass.states['sensor.swegon_supply_fan_control'].state)}%</text>
              </g>
            </g>
            </g>
        </svg>
    <!--<div class="container">
      <div class="bg">
          <div class="flex-container">
              <div class="flex-col-out">
                  <div>${this.hass.states['sensor.swegon_external_fresh_air_temperature'].state}°C</div>
                  <div class="fan-state"><ha-icon icon="mdi:speedometer"></ha-icon></ha-icon> ${Math.trunc(this.hass.states['sensor.swegon_supply_fan_rpm'].state)} rpm</div>
                  <div>${this.hass.states['sensor.swegon_exhaust_air_temperature'].state}°C</div>
                  <div class="fan-state"><ha-icon icon="mdi:speedometer"></ha-icon> ${Math.trunc(this.hass.states['sensor.swegon_extract_fan_rpm'].state)} rpm</div>
              </div>
              <div class="flex-col-main">
                  <div>${this.hass.states[this.config.entity].attributes.temperature}°C</div>
                  <div><ha-icon class="spin" icon="mdi:${({'Stopped': 'fan-off', 'Away': 'home-export-outline', 'Home': 'home-outline', 'Boost': 'fan-plus', 'Travelling': 'airplane-takeoff'}[this.hass.states['select.swegon_operating_mode'].state])}"></ha-icon></div> 
              </div>
              <div class="flex-col-in">
                  <div>${this.hass.states['sensor.swegon_extract_air_temp'].state}°C</div>
                  <div class="fan-state"><ha-icon icon="mdi:fan"></ha-icon> ${Math.trunc(this.hass.states['sensor.swegon_exhaust_fan_control'].state)}%</div>
                  <div>${this.hass.states['sensor.swegon_supply_air_temp'].state}°C</div>
                  <div class="fan-state"><ha-icon icon="mdi:fan"></ha-icon> ${Math.trunc(this.hass.states['sensor.swegon_supply_fan_control'].state)}%</div>
              </div>
          </div>
      </div>
      </div>-->
      <div class="info-row">
      ${this.getAirFilterTmpl()}
      ${this.getPreHeatTmpl()}
      ${this.getSummerModeTmpl()}
      </div>
    </ha-card>  
    `;
  }

//  getFanTmpl() {
//    if (this.hass.states['binary_sensor.supply_fan'].state == 'on') {
//      return html `<ha-icon icon="mdi:fan"></ha-icon>`;
//    } else {
//      return html `<ha-icon class="inactive" icon="mdi:fan"></ha-icon>`;
//    }
//  }

  getAirFilterTmpl() {
    if (this.hass.states['binary_sensor.swegon_filter_guard_info'].state != 'on') {
      return html `<ha-icon class="inactive" icon="mdi:air-filter"></ha-icon>`;
    } else {
      return html `<ha-icon class="warning" icon="mdi:air-filter"></ha-icon>`;
    }
  }

//  getBypassTmpl() {
//    if (this.hass.states['binary_sensor.bypass_valve'].state == 'on') {
//      return html `<ha-icon icon="mdi:electric-switch"></ha-icon>`;
//    } else {
//      return html `<ha-icon class="inactive" icon="mdi:electric-switch"></ha-icon>`;
//    }
//  }

  getPreHeatTmpl() {
    if (this.hass.states['binary_sensor.swegon_preheater_active'].state == 'on') {
      return html `<ha-icon icon="mdi:radiator"></ha-icon>`;
    } else {
      return html `<ha-icon icon="mdi:radiator-off"></ha-icon>`;
    }
  }

  getSummerModeTmpl() {
    if (this.hass.states['binary_sensor.swegon_summer_cooling_active'].state == 'off') {
      return html `<ha-icon icon="mdi:snowflake"></ha-icon>`;
    } else {
      return html `<ha-icon class="inactive" icon="mdi:weather-sunny"></ha-icon>`;
    }
  }

  setConfig(config) {
    this.config = config;
  }

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {
    return 7;
  }

  static get styles() {
    return css `
    .container {
      padding: 10px;
      font-family: sans-serif;
    }
    .bg {
      height: 200px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position-y: center
    }
    .not-found {
    background-color: yellow;
    font-family: sans-serif;
    font-size: 14px;
    padding: 8px;
    }
    .col-main {
      padding: 30px 0px;
      font-size: xx-large;
      text-align: center;
      font-weight:bold;
      text-anchor:middle;
    }
    .col-out {
      text-anchor:start;
      font-size: x-large;
    }
    .col-in {
      text-anchor:end;
      font-size: x-large;
    }
    .fan-state {
      padding-top: 15px;
    }

    .info-row {
      background: rgba(0,0,0,0.2);
      margin-top: 10px;
      padding: 5px;
      border-top: rgba(0,0,0,0.4);
      -webkit-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
      -moz-box-shadow: 0px -4px 3px rgba(50, 50, 50, 0.75);
      box-shadow: 0px -2.5px 3px rgba(0, 0, 0, 0.4);
      display: flex;
      justify-content: space-around;
    }

    .inactive {
      opacity: 0.7;
    }

    .warning {
      color: color: #d80707db;
    }
    
    .icon {
    	transform: scale(1.4 1.4);
    }
    
    .spin {
      transform-box: fill-box;
      transform-origin: 50% 50%;
      animation: spin 2s linear infinite;
    }
    
    @keyframes spin {
      100% {transform:rotate(360deg);}
    }`;
  }
}
customElements.define("swegon-casa-card", SwegonCasaCard);