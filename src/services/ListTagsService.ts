import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";

class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tags = await tagsRepositories.find();

    return classToPlain(tags);
  }
}

export { ListTagsService };
