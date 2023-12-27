export function calcReadTime(content) {
    const totalWords = content.split(" ").length;
    console.log(Math.round((totalWords/100)*0.3))
    return Math.round((totalWords/100)*0.3);

}
