from settings import *
from random import randint
import pygame


class Obstacle(pygame.sprite.Sprite):
    def __init__(self, obstacle_type):
        super().__init__()

        if obstacle_type == 'moth':
            moth_1 = pygame.image.load(flight_1).convert_alpha()
            moth_2 = pygame.image.load(flight_2).convert_alpha()
            self.frames = [moth_1, moth_2]
            y_pos = Bottom - 120
        elif obstacle_type == 'snail':
            snail_1 = pygame.image.load(snail_move_1).convert_alpha()
            snail_2 = pygame.image.load(snail_move_2).convert_alpha()
            self.frames = [snail_1, snail_2]
            y_pos = Bottom
        elif obstacle_type == 'moth2':
            moth_3 = pygame.image.load(flight_3).convert_alpha()
            moth_4 = pygame.image.load(flight_4).convert_alpha()
            self.frames = [moth_3, moth_4]
            y_pos = Bottom - 120
        elif obstacle_type == 'chicken':
            chicken_1 = pygame.image.load(chicken_move_1).convert_alpha()
            chicken_2 = pygame.image.load(chicken_move_2).convert_alpha()
            self.frames = [chicken_1, chicken_2]
            y_pos = Bottom  
        else:
            raise ValueError(f"Unknown obstacle type: {obstacle_type}")

        self.animation_index = 0
        self.image = self.frames[self.animation_index]
        self.rect = self.image.get_rect(midbottom=(randint(Width, Width + 350), y_pos))
        self.rect.width -= 50
        self.obstacles_speed = 4

    def animation_state(self):
        self.animation_index += 0.1
        if self.animation_index >= len(self.frames):
            self.animation_index = 0
        self.image = self.frames[int(self.animation_index)]

    def update(self):
        self.animation_state()
        self.rect.x -= self.obstacles_speed
        self.check_and_destroy()

    def check_and_destroy(self):
        if self.rect.x <= -100:
            self.kill()

    def set_speed(self, speed):
        self.obstacles_speed = speed