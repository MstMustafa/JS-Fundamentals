function extractFileNameAndExtension(path) {
   
    const lastBackslashIndex = path.lastIndexOf('\\');
    const fileNameWithExtension = path.substring(lastBackslashIndex + 1);
    
    const lastDotIndex = fileNameWithExtension.lastIndexOf('.');
    
    const fileName = fileNameWithExtension.substring(0, lastDotIndex);
    const fileExtension = fileNameWithExtension.substring(lastDotIndex + 1);
    
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtension}`);
}
