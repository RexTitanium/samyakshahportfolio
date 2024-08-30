const introductionData = ['Hi!', 'Hi! I am Samyak Shah.','Hi! I am Samyak Shah. I am a Full Stack Developer with a high passion for JavaScript and Python.',
  'I am also intrigued by Artificial Intelligence and Machine Learning and have been developing highly effective models.',
];
const storyData = [
    'My Story?',
    'I have a Bachelor’s degree in Electronics and Telecommunication.',
    'I have a Bachelor’s degree in Electronics and Telecommunication and currently pursuing a Master’s degree in Computer Science from Indiana University.',
    'Over the years I have developed several projects in Full Stack and AIML domains, and participated in several hackathons.',
    'Overall, these projects really pushed me to explore new technologies and apply them to solve real-world problems.',
  ];
  


const combined_data = [];
  
[...introductionData,...storyData].forEach(item => {
    combined_data.push(item);
    combined_data.push(3000);
});

const removeDuplicates = (array, removeStringList= []) => {
    const uniqueArray = [];
    array.forEach(item => {
      if (!removeStringList.includes(item)) {
        if (item.includes(uniqueArray[uniqueArray.length -1] )) {
          uniqueArray.pop()
          uniqueArray.push(item) 
        }
        else {
          uniqueArray.push(item);
        } 
      }
    });
    return uniqueArray;
  }; 
export const story_mode_data = combined_data;
export {removeDuplicates, introductionData, storyData}