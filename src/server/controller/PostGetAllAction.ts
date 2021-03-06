import {Context} from "koa";
import {getManager} from "typeorm";
import {Post} from "../entity/Post";
import * as fs from 'fs-extra-promise';
/**
 * Loads all posts from the database.
 */
export async function postGetAllAction(context: Context) {

    // get a post repository to perform operations with post
    const postRepository = getManager().getRepository(Post);

    // load a post by a given post id
    const posts = await postRepository.find();

    context.body = await fs.readFileAsync(__dirname+'/../public/index.html', { encoding: 'utf8' });
}