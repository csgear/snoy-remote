/**
 * Sony TV Remote IRCC Codes (Base64 Encoded)
 */

// Power controls
export const POWER = "AAAAAQAAAAEAAAAVAw==";
export const INPUT = "AAAAAQAAAAEAAAAlAw==";

// HDMI inputs
export const SYNC_MENU = "AAAAAgAAABoAAABYAw==";
export const HDMI1 = "AAAAAgAAABoAAABaAw==";
export const HDMI2 = "AAAAAgAAABoAAABbAw==";
export const HDMI3 = "AAAAAgAAABoAAABcAw==";
export const HDMI4 = "AAAAAgAAABoAAABdAw==";

// Numeric keys
export const NUM_1 = "AAAAAQAAAAEAAAAAAw==";
export const NUM_2 = "AAAAAQAAAAEAAAABAw==";
export const NUM_3 = "AAAAAQAAAAEAAAACAw==";
export const NUM_4 = "AAAAAQAAAAEAAAADAw==";
export const NUM_5 = "AAAAAQAAAAEAAAAEAw==";
export const NUM_6 = "AAAAAQAAAAEAAAAFAw==";
export const NUM_7 = "AAAAAQAAAAEAAAAGAw==";
export const NUM_8 = "AAAAAQAAAAEAAAAHAw==";
export const NUM_9 = "AAAAAQAAAAEAAAAIAw==";
export const NUM_0 = "AAAAAQAAAAEAAAAJAw==";
export const DOT = "AAAAAgAAAJcAAAAdAw==";

// Color buttons
export const CC = "AAAAAgAAAJcAAAAoAw==";
export const RED = "AAAAAgAAAJcAAAAlAw==";
export const GREEN = "AAAAAgAAAJcAAAAmAw==";
export const YELLOW = "AAAAAgAAAJcAAAAnAw==";
export const BLUE = "AAAAAgAAAJcAAAAkAw==";

// Navigation
export const UP = "AAAAAQAAAAEAAAB0Aw==";
export const DOWN = "AAAAAQAAAAEAAAB1Aw==";
export const RIGHT = "AAAAAQAAAAEAAAAzAw==";
export const LEFT = "AAAAAQAAAAEAAAA0Aw==";
export const CONFIRM = "AAAAAQAAAAEAAABlAw==";
export const HELP = "AAAAAgAAAMQAAABNAw==";
export const DISPLAY = "AAAAAQAAAAEAAAA6Aw==";
export const OPTIONS = "AAAAAgAAAJcAAAA2Aw==";
export const BACK = "AAAAAgAAAJcAAAAjAw==";
export const HOME = "AAAAAQAAAAEAAABgAw==";

// Volume controls
export const VOLUME_UP = "AAAAAQAAAAEAAAASAw==";
export const VOLUME_DOWN = "AAAAAQAAAAEAAAATAw==";
export const MUTE = "AAAAAQAAAAEAAAAUAw==";
export const AUDIO = "AAAAAQAAAAEAAAAXAw==";

// Channel controls
export const CHANNEL_UP = "AAAAAQAAAAEAAAAQAw==";
export const CHANNEL_DOWN = "AAAAAQAAAAEAAAARAw==";

// Playback controls
export const PLAY = "AAAAAgAAAJcAAAAaAw==";
export const PAUSE = "AAAAAgAAAJcAAAAZAw==";
export const STOP = "AAAAAgAAAJcAAAAYAw==";
export const FLASH_PLUS = "AAAAAgAAAJcAAAB4Aw==";
export const FLASH_MINUS = "AAAAAgAAAJcAAAB5Aw==";
export const PREV = "AAAAAgAAAJcAAAA8Aw==";
export const NEXT = "AAAAAgAAAJcAAAA9Aw==";

// All codes as an object for easier lookup
export const IRCC_CODES = {
  power: POWER,
  input: INPUT,
  syncMenu: SYNC_MENU,
  hdmi1: HDMI1,
  hdmi2: HDMI2,
  hdmi3: HDMI3,
  hdmi4: HDMI4,
  num1: NUM_1,
  num2: NUM_2,
  num3: NUM_3,
  num4: NUM_4,
  num5: NUM_5,
  num6: NUM_6,
  num7: NUM_7,
  num8: NUM_8,
  num9: NUM_9,
  num0: NUM_0,
  dot: DOT,
  cc: CC,
  red: RED,
  green: GREEN,
  yellow: YELLOW,
  blue: BLUE,
  up: UP,
  down: DOWN,
  right: RIGHT,
  left: LEFT,
  confirm: CONFIRM,
  help: HELP,
  display: DISPLAY,
  options: OPTIONS,
  back: BACK,
  home: HOME,
  volumeUp: VOLUME_UP,
  volumeDown: VOLUME_DOWN,
  mute: MUTE,
  audio: AUDIO,
  channelUp: CHANNEL_UP,
  channelDown: CHANNEL_DOWN,
  play: PLAY,
  pause: PAUSE,
  stop: STOP,
  flashPlus: FLASH_PLUS,
  flashMinus: FLASH_MINUS,
  prev: PREV,
  next: NEXT,
};
