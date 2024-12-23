import { useEffect, useState } from 'react';
import zxcvbn from 'zxcvbn';

interface PasswordStrengthIndicatorProps {
  password: string;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
  password,
}) => {
  const [score, setScore] = useState(0);

  const evaluateStrength = (password: string) => {
    const result = zxcvbn(password);
    setScore(result.score);
  };

  useEffect(() => {
    evaluateStrength(password);
  }, [password]);

  const getStrengthColor = (score: number) => {
    if (score === 0) return 'red';
    if (score === 1) return 'default-color';
    if (score === 2) return 'yellow';
    if (score === 3) return 'lightgreen';
    return 'green';
  };

  const getStrengthText = (score: number) => {
    if (score === 0) return 'Very Weak';
    if (score === 1) return 'Weak';
    if (score === 2) return 'Moderate';
    if (score === 3) return 'Strong';
    return 'Very Strong';
  };

  return (
    <div>
      <div
        style={{
          width: '100%',
          height: '10px',
          backgroundColor: '#e0e0e0',
          borderRadius: '5px',
          marginTop: '8px',
        }}
      >
        <div
          style={{
            width: `${(score / 4) * 100}%`,
            height: '100%',
            backgroundColor: getStrengthColor(score),
            borderRadius: '5px',
          }}
        ></div>
      </div>
      <p style={{ color: getStrengthColor(score) }}>{getStrengthText(score)}</p>
    </div>
  );
};

export default PasswordStrengthIndicator;
