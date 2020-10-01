type Options = {
  useClass?: boolean;
  useConstant?: boolean;
  useId?: boolean;
  useQuery?: boolean;
  minify?: boolean;
};

declare function Sword(
  opts?: Options
): { compile: (stylesheet: string) => string };

export = Sword;
