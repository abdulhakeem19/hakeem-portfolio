interface DevStatusProps {
  children: React.ReactNode;
}

export function DevStatus({ children }: DevStatusProps) {
  return (
    <div className="dev-status mono">
      <span className="pulse" />
      {children}
    </div>
  );
}
