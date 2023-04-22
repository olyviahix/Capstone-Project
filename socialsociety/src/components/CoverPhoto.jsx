

function CoverPic() {
    const image_input = document.getElementById('image_input');
    let uploaded_image = '';

    image_input.addEventListener('change',function(){
        const reader = new FileReader();
        reader.addEventListener('load', ()=> {
            uploaded_image = reader.result;
            document.getElementById('display_image').style.backgroundImage = `url(${uploaded_image})` 
        });
        reader.readAsDataURL(this.files[0]);
    })

    return (
        <div>
        <input type = 'file' id = 'image_input' accept = 'image/png, image/jpg' />
        <div id = 'display_image'>

        </div>
        </div>
        
    )
}
export default CoverPic;