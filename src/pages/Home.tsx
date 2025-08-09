import React from 'react'
import MoodInput from '@/components/MoodInput'
import MoodOutput from '@/components/MoodOutput'

const moodData: Record<string, {
  subject: string;
  footer: string;
  emoji: string;
  quote: string;
}> = {
  happy: {
    subject: '😊 Feeling Great!',
    footer: 'Keep smiling! 😄',
    emoji: '😊😄🌞',
    quote: "Happiness is not something ready-made. It comes from your own actions.",
  },
  sad: {
    subject: '😢 Feeling Low',
    footer: 'Keep motivated! 💪',
    emoji: '😢💔🌧️',
    quote: "Every day may not be good, but there is something good in every day.",
  },
  nervous: {
    subject: '😬 Feeling Nervous',
    footer: 'Take a deep breath 🧘‍♂️',
    emoji: '😬💭🫣',
    quote: "You don’t have to control your thoughts. You just have to stop letting them control you.",
  },
  angry: {
    subject: '😠 Feeling Angry',
    footer: 'Take a moment to calm down 🧊',
    emoji: '😡🔥😤',
    quote: "For every minute you remain angry, you give up sixty seconds of peace of mind.",
  },
  excited: {
    subject: '🤩 Feeling Excited!',
    footer: 'Let’s make the most of it! 🎉',
    emoji: '🤩🎉🔥',
    quote: "The excitement of learning separates youth from old age. As long as you're learning you're not old.",
  },
};
console.log(moodData);
const Home = () => {

  const [mood, setMood] = React.useState<string>('');
  const [subject, setSubject] = React.useState<string>('');
  const [footer, setFooter] = React.useState<string>('');
  const [generated, setGenerated] = React.useState<boolean>(false);
  const [copyText, setCopyText] = React.useState<string>('');
  const handleCopyClipboard = (text:string) => {
    navigator.clipboard.writeText(subject);
    setCopyText('copied!');
    setTimeout(()=>{
      setCopyText('copy to clipboard');
    },2000)
  }
  const handleGenerated = () => {
    const lowerMood = mood.toLowerCase();
    // switch(lowerMood) {
    //   case 'happy':
    //     setSubject('Feeling Great!');
    //     setFooter('Keep smiling!');
    //     break;
    //   case 'sad':
    //     setSubject('Feeling low!');
    //     setFooter('Keep motivated!');
    //     break;
        
    //   default:
    //     setSubject('');
    //     setFooter('');
    
    // }

    // if(lowerMood.includes('happy')){
    //   setEmoji('😊😄🌞')
    //   setSubject('Feeling Great 😊!');
    //   setFooter('Keep smiling! 😄');
    //   setQoute('Happiness is a choice, choose it every day! 😊');
    // }
    // else if(lowerMood.includes('sad')){
    //   setEmoji('😢💔🌧️');
    //   setSubject('Feeling low! 😢');
    //   setFooter('Take a deep breath 🧘‍♂️');
    //   setQoute('It’s okay to feel sad sometimes, just remember it’s temporary.');
    // }
    // else if(lowerMood.includes('nervous')){
    //   setEmoji('😬💭🫣');
    //   setSubject('Feeling Nervous!😬 ');
    //   setFooter('Take a deep breath!');
    //   setQoute('Nervousness is just excitement in disguise! 🥳');
    // }
    // else if(lowerMood.includes('angry ')){
    //   setEmoji('😡🔥😤')
    //   setSubject('Feeling Angry! 😠');
    //     setFooter('Take a moment to calm down!');
    //     setQoute('Anger is just a moment, don’t let it define you! 🧘‍♀️');
    //   }
    // else if(lowerMood.includes('excited')){
    //   setEmoji('🤩🎉🔥');
    //   setSubject('Feeling Excited! 🤩');
    //   setFooter('Let’s make the most of it!');
    //   setQoute('Excitement is the spark that ignites your passion! 🔥');
    // }
    // else {
    //   setSubject('Mood update');
    //   setFooter('Catch you later!');
    //   setEmoji('😌');
    //   setQoute('Every day is a new opportunity to feel better! 🌈');
    // }
    const matchedMood = Object.keys(moodData).find((key)=>lowerMood.includes(key));
//         const matchedMood2 = Object.values(moodData);
// const match3 = Object.entries(moodData)
    console.log(matchedMood,"ggg");
    if(matchedMood === lowerMood){
      const today = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
      const data = moodData[matchedMood];
      setSubject(`${data.subject} — ${today}`);
      setFooter(data.footer);
    }
    else{
      setSubject('Mood update');  
      setFooter('Catch you later!');}
      setGenerated(true);
  }
  const handleReset=()=>{
    setMood('');
    setSubject('');
    setFooter('');
    setGenerated(false);
  }
  return (
    <div className='max-w-xl mx-auto border rounded-lg space-y-6 p-2'>
      <h2 className='text-2xl font-bold text-gray-800'> MoodMail Generator</h2>
      {!generated ? <MoodInput mood={mood} setMood={setMood} onGenerated={handleGenerated}  disabled={generated}/>:<MoodOutput subject={subject} footer={footer} onReset={handleReset} copyText={copyText} handleCopyClipboard={handleCopyClipboard}/>
      }
    </div>
  )
}

export default Home
