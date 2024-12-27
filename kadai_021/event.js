const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    setTimeout(() => {
        console.log("ボタンをクリックしました");
        const elmText = document.getElementById('text');

        elmText.textContent = "ボタンをクリックしました";
    }, 2000)
    
});


