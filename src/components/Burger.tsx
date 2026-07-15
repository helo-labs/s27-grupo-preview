export default function Burger({ open }: { open: boolean }) {
  const bar: React.CSSProperties = {
    position: 'absolute',
    left: 0,
    height: 2,
    width: '100%',
    background: 'currentColor',
    borderRadius: 4,
    transition: 'all .25s ease-in-out',
  };

  return (
    <span className="relative inline-block" style={{ width: 22, height: 16 }}>
      <span
        style={{
          ...bar,
          top: 0,
          left: open ? 3 : 0,
          transformOrigin: 'left center',
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
        }}
      />
      <span
        style={{
          ...bar,
          top: '50%',
          transformOrigin: 'left center',
          transform: 'translateY(-50%)',
          width: open ? '0%' : '100%',
          opacity: open ? 0 : 1,
        }}
      />
      <span
        style={{
          ...bar,
          top: open ? 14 : '100%',
          left: open ? 3 : 0,
          transformOrigin: 'left center',
          transform: open ? 'rotate(-45deg)' : 'translateY(-100%)',
        }}
      />
    </span>
  );
}
