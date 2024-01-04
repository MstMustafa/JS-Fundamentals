function rotateArray(arr, rotations) {
    let len = arr.length;
    
    let effectiveRotations = rotations % len;

    
    let rotatedArray = [...arr.slice(effectiveRotations), ...arr.slice(0, effectiveRotations)];

    
    console.log(rotatedArray.join(' '));
}
