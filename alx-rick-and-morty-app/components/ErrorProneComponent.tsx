// const ErrorProneComponent: React.FC = () => {
//   throw new Error('This is a test error!');
// };

// export default ErrorProneComponent;

const ErrorProneComponent: React.FC = () => {
  if (typeof window !== 'undefined') {
    throw new Error('This is a test error!');
  }
  return null;
};
export default ErrorProneComponent;