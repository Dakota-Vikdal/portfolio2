import { TypeAnimation } from 'react-type-animation';

function TypingAnimation() {

  return (
    <TypeAnimation
      sequence={[
        'Software Engineer,',
        1000,
        'adventurous man,',
        1000,
        'and all around cool guy.',
        1000,
      ]}
      wrapper="p"
      speed={200}
      style={{ fontSize: '1em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );

};

export default TypingAnimation