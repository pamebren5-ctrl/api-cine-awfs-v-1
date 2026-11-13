import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "../types/jwt-payload.type";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
    constructor(config: ConfigService){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            //secretOrKey: config.getOrThrow<string>('JWT_SECRET'),
            secretOrKey: config.getOrThrow<string>('JWT_SECRET','Pe_Ku0+5&210'),
            ignoreExpiration: false
        });
    }

    validate(payload: JwtPayload) {
        return payload;
    }

}