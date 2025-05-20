import axios from "axios";
import { IRCC_CODES } from "./irccCodes";

const SONY_TV_IP = import.meta.env.VITE_SONY_TV_IP;
const PSK = import.meta.env.VITE_SONY_TV_PSK;

// Shared axios instance for REST API
const restClient = axios.create({
  baseURL: `http://${SONY_TV_IP}`,
  headers: {
    "X-Auth-PSK": PSK,
    "Content-Type": "application/json",
  },
});

// Shared axios instance for IRCC (SOAP)
const irccClient = axios.create({
  baseURL: `http://${SONY_TV_IP}/sony/ircc`,
  headers: {
    "X-Auth-PSK": PSK,
    "Content-Type": "text/xml; charset=UTF-8",
    SOAPACTION: '"urn:schemas-sony-com:service:IRCC:1#X_SendIRCC"',
  },
});

// IRCC: Remote control commands (SOAP)
export async function sendIRCC(irccCode) {
  const body = `
    <s:Envelope
      xmlns:s="http://schemas.xmlsoap.org/soap/envelope/"
      s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
      <s:Body>
        <u:X_SendIRCC xmlns:u="urn:schemas-sony-com:service:IRCC:1">
          <IRCCCode>${irccCode}</IRCCCode>
        </u:X_SendIRCC>
      </s:Body>
    </s:Envelope>`;

  return irccClient.post("", body);
}

// REST: Get system info
export async function getSystemInformation() {
  const response = await restClient.post("/sony/system", {
    method: "getSystemInformation",
    params: [],
    id: 1,
    version: "1.0",
  });

  return response.data.result[0]; // Return just the info object
}

// Convenience functions for remote control actions
export async function powerToggle() {
  return sendIRCC(IRCC_CODES.power);
}

export async function volumeUp() {
  return sendIRCC(IRCC_CODES.volumeUp);
}

export async function volumeDown() {
  return sendIRCC(IRCC_CODES.volumeDown);
}

export async function mute() {
  return sendIRCC(IRCC_CODES.mute);
}

export async function navigate(direction) {
  const directions = {
    up: IRCC_CODES.up,
    down: IRCC_CODES.down,
    left: IRCC_CODES.left,
    right: IRCC_CODES.right,
    enter: IRCC_CODES.confirm,
  };

  return sendIRCC(directions[direction.toLowerCase()] || IRCC_CODES.confirm);
}

export async function pressButton(buttonName) {
  const code = IRCC_CODES[buttonName.toLowerCase()];
  if (!code) {
    throw new Error(`Unknown button: ${buttonName}`);
  }

  return sendIRCC(code);
}

export async function switchInput(inputNumber) {
  const inputs = {
    1: IRCC_CODES.hdmi1,
    2: IRCC_CODES.hdmi2,
    3: IRCC_CODES.hdmi3,
    4: IRCC_CODES.hdmi4,
  };

  return sendIRCC(inputs[inputNumber] || IRCC_CODES.input);
}

// Export all IRCC codes for direct access
export { IRCC_CODES };
