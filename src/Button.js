import "./Button.css";

export default function Button({ showHandle, children }) {
  return <button onClick={showHandle}>{children}</button>;
}
