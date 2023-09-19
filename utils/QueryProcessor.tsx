export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "ntirumal"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "ntirumal"
    );
  }
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const multiplyMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (multiplyMatch) {
    const x: number = parseInt(multiplyMatch[1]);
    const y: number = parseInt(multiplyMatch[2]);
    return (x*y).toString();
  }

  const primes = query.match(/Which of the following numbers are primes: (\d+), (\d+), (\d+), (\d+), (\d+)/);
  if (primes) {
    const a: number = parseInt(primes[1]);
    const b: number = parseInt(primes[2]);
    const c: number = parseInt(primes[3]);
    const d: number = parseInt(primes[4]);
    const e: number = parseInt(primes[5]);
    const isPrime = false
    const lst = [a,b,c,d,e]
    var result = new Array();
    for (let i = 2; i < lst[i]; i++) {
      if (lst[i] % i == 0) {
          break;
      }
      else{
        result.push(lst[i]);
      }
    }
    return result;
  }
  return "";
}
  

