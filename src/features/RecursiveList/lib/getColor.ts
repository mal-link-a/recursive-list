export const getColor = (val: number) => {
    const colors = ["#DC143C", "#00FF00", "#4682B4", "#FFFF00", "#FF00FF", "#000000", "#FF69B4", "#1E90FF"];
    const index = val < colors.length? val : val - colors.length * Math.floor(val/colors.length);
    return colors[index];

}