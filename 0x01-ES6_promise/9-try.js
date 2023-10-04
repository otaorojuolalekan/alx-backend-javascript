export default function guardrail(funcValuetion) {
  const queue = [];
  let funcValue;

  try {
    funcValue = funcValuetion();
  } catch (error) {
    funcValue = error.toString();
  }
  queue.push(funcValue);
  queue.push('Guardrail was processed');
  return queue;
}
