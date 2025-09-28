type ClassValue = string | undefined | null | false | Record<string, boolean> | ClassValue[];

export function cn(...classes: ClassValue[]): string {
  const result: string[] = [];

  classes.forEach((cls) => {
    if (!cls) return;

    if (typeof cls === "string") {
      result.push(cls);
    } else if (Array.isArray(cls)) {
      result.push(cn(...cls));
    } else if (typeof cls === "object") {
      Object.entries(cls).forEach(([key, value]) => {
        if (value) result.push(key);
      });
    }
  });

  return result.join(" ");
}
