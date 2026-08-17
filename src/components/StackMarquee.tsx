const stack = ['React', 'Node.js', 'TypeScript', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB', 'Redis', 'Jenkins', 'ArgoCD', 'AWS', 'React Native', 'RAG / LLM APIs', 'GraphQL', 'Tailwind'];

export default function StackMarquee() {
  return (
    <div className="stack-wrap">
      <div className="stack-track">
        {stack.map((s, i) => <span key={i}><b>{s}</b></span>)}
        {stack.map((s, i) => <span key={`d${i}`}><b>{s}</b></span>)}
      </div>
    </div>
  );
}
