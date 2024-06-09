import articleSchema, {
  type Article,
} from "@/shared/api/content/schemas/article.schema";
import articleDashboardSchema, {
  ArticleDashboard,
} from "@/shared/api/content/schemas/articleDashboard.schema";
import {
  ARTICLES_DIR,
  ARTICLE_DASHBOARD_FILE,
  ARTICLE_FILE,
} from "../constants";
import { DataReader } from "@/shared/api/content/lib/dataReader";

export const articleReader = new DataReader<Article>({
  dirPath: ARTICLES_DIR,
  fileName: ARTICLE_FILE,
  schema: articleSchema,
});

export const articleDashboardReader = new DataReader<ArticleDashboard>({
  dirPath: ARTICLES_DIR,
  fileName: ARTICLE_DASHBOARD_FILE,
  schema: articleDashboardSchema,
});
