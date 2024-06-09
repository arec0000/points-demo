import { compileFromFile } from "json-schema-to-typescript";
import { promises as fsPromises } from "fs";
import * as path from "path";

async function downloadFile(url: string, outputPath: string): Promise<void> {
  const response = await fetch(url);
  const data = await response.text();
  await fsPromises.writeFile(outputPath, data);
}

async function generateTypes(
  schemaPath: string,
  outputPath: string,
): Promise<void> {
  const ts = await compileFromFile(schemaPath);
  await fsPromises.writeFile(outputPath, ts);
}

async function downloadAndGenerateTypes(
  schemaDir: string,
  outputDir: string,
): Promise<void> {
  const schemaFiles = [
    "article.schema.json",
    "publishedArticles.schema.json",
    "articleDashboard.schema.json",
    "block.schema.json",
    "publishedQuests.schema.json",
    "quest.schema.json",
    "subquest.schema.json",
    "task.schema.json",
    "storiesList.schema.json",
    "country.schema.json",
    "countryList.schema.json",
    "way.schema.json",
    "onboarding.schema.json",
  ];

  for (const file of schemaFiles) {
    const schemaPath = path.join(schemaDir, file);
    const outputPath = path.join(outputDir, file);

    await downloadFile(schemaPath, outputPath);

    const typesOutputPath = path.join(
      outputDir,
      file.replace(".json", ".d.ts"),
    );
    await generateTypes(outputPath, typesOutputPath);
  }
}

const [schemaDir, outputDir] = process.argv.slice(2);

if (!schemaDir || !outputDir) {
  console.error("Необходимо указать путь к схемам и путь для выходных файлов");
  process.exit(1);
}

downloadAndGenerateTypes(schemaDir, outputDir)
  .then(() => console.log("Схемы скачаны и типы сгенерированы!"))
  .catch((error) => console.error("Произошла ошибка:", error));
