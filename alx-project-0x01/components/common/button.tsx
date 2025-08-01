const Button: React.FC<{ label: string }> = ({ label }) => {
  return <button className="px-4 py-2 text-white bg-blue-500 rounded">{label}</button>;
};

export default Button;