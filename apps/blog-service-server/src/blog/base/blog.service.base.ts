/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Blog as PrismaBlog,
  Comment as PrismaComment,
  Author as PrismaAuthor,
} from "@prisma/client";

export class BlogServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BlogCountArgs, "select">): Promise<number> {
    return this.prisma.blog.count(args);
  }

  async blogs(args: Prisma.BlogFindManyArgs): Promise<PrismaBlog[]> {
    return this.prisma.blog.findMany(args);
  }
  async blog(args: Prisma.BlogFindUniqueArgs): Promise<PrismaBlog | null> {
    return this.prisma.blog.findUnique(args);
  }
  async createBlog(args: Prisma.BlogCreateArgs): Promise<PrismaBlog> {
    return this.prisma.blog.create(args);
  }
  async updateBlog(args: Prisma.BlogUpdateArgs): Promise<PrismaBlog> {
    return this.prisma.blog.update(args);
  }
  async deleteBlog(args: Prisma.BlogDeleteArgs): Promise<PrismaBlog> {
    return this.prisma.blog.delete(args);
  }

  async findComments(
    parentId: string,
    args: Prisma.CommentFindManyArgs
  ): Promise<PrismaComment[]> {
    return this.prisma.blog
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .comments(args);
  }

  async getAuthor(parentId: string): Promise<PrismaAuthor | null> {
    return this.prisma.blog
      .findUnique({
        where: { id: parentId },
      })
      .author();
  }
}
