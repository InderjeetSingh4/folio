import "./styles/style.css";

const HoverLinks = ({ text, cursor }: { text: string; cursor?: boolean }) => {
  return (
    <div className="hover-link" data-cursor={!cursor && "disable"}>
      <span className="hover-link-text">{text}</span>
      <span className="hover-link-line" />
    </div>
  );
};

export default HoverLinks;
