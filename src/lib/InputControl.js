export default class InputControl {
    onSecondsChanged(seconds) {
        seconds = parseInt(seconds);

        if (seconds && typeof seconds === 'number') {
            if (seconds <= 359999) {
                return seconds;
            }
        } else {
            return 0;
        }
    }
}