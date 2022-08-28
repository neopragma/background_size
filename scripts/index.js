function changeBackgroundSize() {
    var explan = "";
    var unit = "px";
    document.getElementById("explanation").innerHTML = "";
    const radioButtons = document.querySelectorAll('input[name="bgSize"][type="radio"]');
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            const banner = document.getElementById("welcomeBanner");
            var newSize = "";
            if (radioButton.id.startsWith("size")) {
                var newWidth = document.getElementById("w").value ;
                var newHeight = document.getElementById("h").value;
                if (newWidth === "") {
                    alert("When you choose size in pixels or as a percentage you must specify at least the width.");
                    break;
                }
                if (radioButton.id === "sizeAsPercentage") {
                    unit = "%";
                }
                explan = unit === "px" ? "pixels" : "percentage";
                if (newHeight === "") {
                    newSize = `${newWidth}${unit}`;
                } else {
                    newSize = `${newWidth}${unit} ${newHeight}${unit}`
                    explan = `both${explan}`;
                }
            } else {
                newSize = radioButton.value;
                explan = radioButton.value;
            }
            banner.style.backgroundSize = newSize;
            var overlayImage = document.getElementById("overlay");
            if (explan === "cover") { 
                const topPixels = Math.floor(Math.random() * 500) + 1;
                const leftPixels = Math.floor(Math.random() * window.innerWidth) + 1;
                overlayImage.style.top = `${topPixels}px`;
                overlayImage.style.left = `${leftPixels}px`;
                overlayImage.style.visibility = "visible";
            } else {
                overlayImage.style.visibility = "hidden";
            }    
            break;
        }
    }
    const explanations = {
        "pixels": "When you set only the width in pixels, the height defaults to 'auto'.",
        "percentage": "When you set only the width as a percentage, the height defaults to 'auto'.",
        "bothpixels": "When you set the width and height in pixels, it sets the absolute size of the background.",
        "bothpercentage": "When you set the width and height as a percentage, it sets the size of the background as a percentage of its container size",
        "auto": "Background size 'auto' displays the image in its original size.",
        "cover": "Background size 'cover' resizes the image to cover the size of its container. The image may be stretched and/or cropped.",
        "contain": "Background size 'contain' resizes the image so that the entire image is visible."
    };
    if (explan) document.getElementById("explanation").innerHTML = explanations[explan];
}