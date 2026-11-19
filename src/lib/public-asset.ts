/** Resolve arquivos de public/ na raiz da aplicação ou no subdiretório do Pages. */
export function publicAsset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`;
}
