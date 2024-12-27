const btn = document.getElementById('btn');

btn.addEventListener('click' , () => {
    console.log("ボタンをクリックしました");
    const elmText = document.getElementById('text');

    elmText.textContent = "ボタンをクリックしました";
    
});