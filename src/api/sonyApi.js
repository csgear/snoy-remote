import axios from "axios";

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
