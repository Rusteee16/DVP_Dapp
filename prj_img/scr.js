async function getData() {
    const getMoodPromise = MoodContract.getAllPatientData();
    const Mood = await getMoodPromise;
    
    console.log(Mood);
    sessionStorage.setItem('TheArray',JSON.stringify(Mood));
    
    window.open('getdata.html')

}